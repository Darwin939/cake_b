import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from .models import Chat, User, Contact , Message
from random import randint
from django.db import connection
from .utils import get_last_messages, get_user_contact, get_current_chat
from datetime import datetime

class ChatConsumer(WebsocketConsumer):
    def fetch_messages(self, data):
        try:
            page= data["page"]
        except:
            page = 1

        messages = get_last_messages(url=self.room_name,page = page)
        content = {
            'command': 'messages',
            'messages': self.messages_to_json(messages)
        }
        self.send_message(content)

    def message_to_json(self, message):
        return {
            'id': message.id_in_chat,
            'username': message.contact.user.username,
            'content': message.content,
            'timestamp': str(int(datetime.timestamp(message.timestamp)))
        }


    def messages_to_json(self, messages):
        result = []
        for message in messages:
            result.append(self.message_to_json(message))
        return result

    def new_message(self, data):
        """

        self.quest = это текущий пользователь который пишет сообщение
        self.master = это хозяин чата, второй с которым гест хочет общаться
        :return:
        """
        chat = Chat.objects.filter(url=self.room_name)
        self.quest = chat[0].participants.all()[0]   #TODO  scope.request.user
        self.master = chat[0].participants.all()[1]   #TODO не знаю как брать второво польователя


        user_contact = get_user_contact(self.quest)
        try:
            id_chat = chat[0].messages.all()[0].id_in_chat+1
            print(id_chat)
        except:
            id_chat = 1
        message = chat[0].messages.create(
            contact=user_contact,
            content=data['message'],
            id_in_chat= id_chat
            )
        message.save()
        content = {
            'command': 'new_message',
            'message': self.message_to_json(message)
        }
        return self.send_chat_message(content)

    commands = {
        'fetch_messages': fetch_messages,
        'new_message': new_message
    }

    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):

        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )


    def send_chat_message(self, message):
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
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
