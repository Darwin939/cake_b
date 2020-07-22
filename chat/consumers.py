import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from .models import Chat, User, Contact
from random import randint
from django.db import connection

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

        # self.room_name = str(randint(1, 999999999999))
        #
        # self.room_group_name = 'chat_%s' % self.room_name
        # # if self.room_name not in chats
        # # Join room group
        # async_to_sync(self.channel_layer.group_add)(
        #     self.room_group_name,
        #     self.channel_name
        # )
        #
        # self.accept()
        # self.after_connect()
    def after_connect(self):
        self.user = self.scope['url_route']['kwargs']['user']
        self.master = User.objects.get(username=self.user)  # master
        self.quest = User.objects.get(id=1)  # гость брать с файлов username с сессии # TODO change in production

        # create contact quest or if exist
        # TODO create contact when he rigistrate his account
        if Contact.objects.filter(user=self.quest):
            quest_contact = Contact.objects.get(user=self.quest)

        else:
            quest_contact = Contact.objects.create(user=self.quest)
            quest_contact.save()

        if Contact.objects.filter(user=self.master):
            master_contact = Contact.objects.get(user=self.master)

        else:
            master_contact = Contact.objects.create(user=self.master)
            master_contact.save()
        # chat create or if exist
        try:
            master_chats = Chat.objects.filter(participants__user=self.master)
            for chat in master_chats:
                for participant in chat.participants.all():
                    if participant.user == self.quest:
                        self.room_name = chat.url
        except Exception as err:
            print(err)
            self.room_name = str(randint(1, 999999999999))
            chat = Chat.objects.create(
                # participants = self.master,
                url=self.room_name)
            chat.save()

            chat.participants.add(quest_contact, master_contact)
        connection.close()
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


    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )


    # Receive message from room group
    def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))
