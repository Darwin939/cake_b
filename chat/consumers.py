import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from .models import Chat, User, Contact
from random import randint
from django.db import connection
from .utils import get_last_messages, get_user_contact, list_chats
from datetime import datetime


class ChatConsumer(WebsocketConsumer):
    def fetch_messages(self, data):
        recipient = data["recipient"]
        try:
            page = data["page"]
        except:
            page = 1

        messages = get_last_messages(recipient=recipient, sender=self.sender_id, page=page)
        content = {
            'command': 'messages',
            'messages': self.messages_to_json(messages)
        }
        self.send_message(content)

    def message_to_json(self, message):
        return {
            'id': message.id_in_chat,
            'content': message.content,
            'timestamp': str(int(datetime.timestamp(message.timestamp))),
            'author':message.contact.user.username
        }

    def messages_to_json(self, messages):
        result = []
        for message in messages:
            result.append(self.message_to_json(message))
        return result

    def register_contact_and_give_chat(self, sender_id, recipient_id):
        """
        Регистрирует контактов если не кто либо
        не зарегистрирован
        :return: возвращает новый созданный чат
        """
        self.sender = User.objects.get(id=sender_id)
        self.recipient = User.objects.get(id=recipient_id)

        if not Contact.objects.filter(user=self.sender):
            sender_contact = Contact.objects.create(user=self.sender)
            sender_contact.save()
        sender_contact = Contact.objects.get(user=self.sender)

        if not Contact.objects.filter(user=self.recipient):
            recipient_contact = Contact.objects.create(user=self.recipient)
            recipient_contact.save()

        recipient_contact = Contact.objects.get(user=self.recipient)

        self.room_name = str(randint(1, 999999999999))
        chat = Chat.objects.create(
            url=self.room_name)
        chat.save()
        chat.participants.add(sender_contact, recipient_contact)

        connection.close()
        return chat

    def new_message(self, data):
        """
        NOTE: нельзя отправлять себе
        :param data:
        :return:
        """
        self.recipient_id = data["recipient"]
        self.chat = Chat.objects.filter(
            participants__user_id=self.sender_id
        ).filter(participants__user_id=self.recipient_id).first()
        # если  такого чата нет и не зарегистрированы контакты
        if not self.chat:
            self.chat = self.register_contact_and_give_chat(self.sender_id,
                                                            self.recipient_id)
        self.sender_contact = get_user_contact(self.sender_id)
        self.recipient_contact = get_user_contact(self.recipient_id)

        # TODO переделать это говно
        try:
            id_chat = self.chat.messages.order_by('-timestamp')[0].id_in_chat + 1

        except:
            id_chat = 1

        message = self.chat.messages.create(
            contact=self.sender_contact,
            content=data['message'],
            id_in_chat=id_chat
        )
        message.save()
        content = {
            'command': 'new_message',
            'message': self.message_to_json(message),
            'sender_id': self.sender_id,
            "recipient_id": self.recipient_id
        }

        return self.send_chat_message(content)

    def pong(self,data):
        message = {"pong":"pong"}
        self.send_message(message)


    def list_chat(self, data):
        user_id = self.sender_id
        res = list_chats(data, user_id=user_id)
        return self.send_message(res)

    commands = {
        'fetch_messages': fetch_messages,
        'new_message': new_message,
        'list_chats': list_chat,
        'ping': pong,
    }

    def connect(self):
        # проверять зареган ли пользователь
        # check_scope

        # if self.scope["user"].is_anonymous:
        #     # Reject the connection
        #     self.close()
        # else:
        #     # Accept the connection
        #     self.accept()
        self.accept()

        self.connect_to_room()

    def connect_to_room(self):
        """
        connect to room and check user is valid?
        room_name = scope[user]
        :return:
        """

        self.sender_id = self.scope['url_route']['kwargs']['room_name']

        self.room_group_name = 'chat_%s' % self.sender_id
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def send_chat_message(self, message):
        self.recipient_chat = 'chat_%s' % message['recipient_id']

        async_to_sync(self.channel_layer.group_send)(
            self.recipient_chat,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    def send_message(self, message):
        self.send(text_data=json.dumps(message))

    def chat_message(self, event):
        message = event['message']
        self.send(text_data=json.dumps(message))

    def receive(self, text_data):
        data = json.loads(text_data)
        self.commands[data['command']](self, data)
