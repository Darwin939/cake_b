import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.conf import settings
from django.core.paginator import Paginator

from .models import Chat, User, Contact , Message
from random import randint
from django.db import connection
from .utils import get_last_messages, get_user_contact, get_current_chat , get_user_list_chats
from datetime import datetime

class ChatConsumer(WebsocketConsumer):
    def fetch_messages(self, data):
        try:
            page= data["page"]
        except:
            page = 1

        messages = get_last_messages(url=data['room'],page = page)
        content = {
            'command': 'messages',
            'messages': self.messages_to_json(messages)
        }
        self.send_message(content)

    def message_to_json(self, message):
        return {
            'id': message.id_in_chat,
            'from_username': message.contact.user.username,
            'content': message.content,
            'timestamp': str(int(datetime.timestamp(message.timestamp))),
            # 'room'
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
        chat_url = data["room"]
        chat = Chat.objects.filter(url=chat_url)
        self.quest = chat[0].participants.all()[0]   #TODO  scope.request.user
        self.master = chat[0].participants.all()[1]   #TODO не знаю как брать второво польователя


        user_contact = get_user_contact(self.quest)
        try:
            id_chat = chat[0].messages.order_by('-timestamp')[0].id_in_chat+1

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
            'message': self.message_to_json(message),
            'room': data['room'],
            "group_user_id" : self.master.user.id
        }

        return self.send_chat_message(content)

    def list_rooms(self,data):
        user_id = 1  # TODO
        res = get_user_list_chats(data,user_id=user_id)
        return self.send_message(res)

    commands = {
        'fetch_messages': fetch_messages,
        'new_message': new_message,
        'list_rooms': list_rooms
    }

    def connect(self):
        #проверять зареган ли пользователь
        #check_scope
        self.accept()
        self.connect_to_room()


    def connect_to_room(self):
        """
        connect to room and check user is valid?
        room_name = scope[user]
        :return:
        """
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
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
        async_to_sync(self.channel_layer.group_send)(
            'chat_%s' % message['group_user_id'],
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
