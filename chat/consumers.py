import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from .models import Chat, User, Contact
from random import randint
from django.db import connection
from .utils import get_last_messages, get_user_contact, list_chats, return_new_unread_message, message_to_json, \
    messages_to_json, get_or_register_contact, create_chat_add_participant, get_current_chat, create_message,  clear_unread_messages_util
from datetime import datetime


class ChatConsumer(WebsocketConsumer):
    """
       This chat consumer handles websocket connections for chat clients.
       It uses AsyncJsonWebsocketConsumer, which means all the handling functions
       must be async functions, and any sync work (like ORM access) has to be
       behind database_sync_to_async or sync_to_async. For more, read
       http://channels.readthedocs.io/en/latest/topics/consumers.html
       """

    def fetch_messages(self, data):
        recipient = data["recipient"]
        try:
            page = data["page"]
        except:
            page = 1

        messages, page_number, has_next = get_last_messages(recipient=recipient, sender=self.sender_id, page=page)

        content = {
            'command': 'messages',
            "page_number": page_number,
            'next': has_next,
            'messages': messages_to_json(messages)

        }
        self.send_message(content)

    def register_contact_and_give_chat(self, sender_id, recipient_id):
        """
        Регистрирует контактов если не кто либо
        не зарегистрирован
        :return: возвращает новый созданный чат
        """
        self.sender = User.objects.get(id=sender_id)
        self.recipient = User.objects.get(id=recipient_id)
        sender_contact = get_or_register_contact(self.sender)
        recipient_contact = get_or_register_contact(self.sender)
        chat = create_chat_add_participant(sender_contact, recipient_contact)

        return chat

    def unread_messages(self, data):
        """
        Возвразщает все непрочитанные сообщения,
        возвращает все сообщения в которых was_read == False
        входнные данные:{command:unread_messages,}
        :param data:
        :return: {"command":"unread_messsage",
                    "messages":[
                    {"id":"1","content":"message","author":"username","recipient":"1","timestamp":'513'},
                    {}
                    ]
                    }
        """
        data = {"page": "1"}
        chat_list = list_chats(data, self.sender_id)['list_chats']
        result = {}
        result["command"] = "unread_message"
        all_messages = []
        result["unread_messages"] = all_messages
        for chat in chat_list:
            user_id = chat['user_id']
            messages = return_new_unread_message(user_id, sender_id=self.sender_id)

            if messages == []:
                continue
            tmp = {}
            tmp["from_user_id"] = user_id
            tmp["messages"] = messages
            all_messages.append(tmp)

        self.send_message(result)

    def my_id(self,data):
        """return my id"""
        try:
            id = self.sender_id
        except:
            id = "unknown user"
        message = {"my_id": id}
        self.send_message(message)


    def new_message(self, data):
        """
        Возвращает все прочитанные сообшения
        NOTE: нельзя отправлять себе

        :param data:
        :return:
        """
        self.recipient_id = data["recipient"]
        self.chat = get_current_chat(self.recipient_id, self.sender_id)
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

        message = create_message(self.chat, self.sender_contact,
                                 data, id_chat)
        content = {
            'command': 'new_message',
            'message': message_to_json(message),
            'sender_id': self.sender_id,
            "recipient_id": self.recipient_id
        }

        return self.send_chat_message(content)

    def pong(self, data):
        message = {"pong": "pong"}
        self.send_message(message)

    def clear_unread_messages(self, data):
        recipient_id = data["recipient"]
        response = clear_unread_messages_util(self.sender_id, recipient_id)
        self.send_message(response)

    def list_chat(self, data):
        """
        Чаты с последними сообщения ,
        сортируя по последним сообщениям
        :param data:
        :return:
        """
        user_id = self.sender_id
        res = list_chats(data, user_id=user_id)
        return self.send_message(res)

    commands = {
        'fetch_messages': fetch_messages,
        'new_message': new_message,
        'list_chats': list_chat,
        'ping': pong,
        "unread_messages": unread_messages,
        'clear_unread_messages': clear_unread_messages,
        "my_id": my_id
    }

    def connect(self):
        self.accept()
        self.connect_to_room()

    def connect_to_room(self):
        """
        connect to room and check user is valid?
        room_name = scope[user]
        :return:
        """

        self.sender_id = self.scope["user"].id   #self.scope['url_route']['kwargs']['room_name']
        print(self.sender_id)
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
        self.recipient_chats = ['chat_%s' % message['recipient_id'], self.room_group_name]
        for chat in self.recipient_chats:
            async_to_sync(self.channel_layer.group_send)(
                chat,
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
