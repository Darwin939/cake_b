from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from random import randint
from chat.models import Chat, Contact
from django.db import connection
from django.conf import settings
from .serializer import ChatSerializer
from django.core.paginator import Paginator
from datetime import datetime

class ChatGiveView(APIView):
    def get(self, request, pk):
        self.master = User.objects.get(id=pk)  # master
        self.quest = User.objects.get(id=1)  # гость брать с файлов username с сессии # TODO change in production
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
            if not self.room_name:
                raise ValueError
        except Exception as err:
            print(err)
            self.room_name = str(randint(1, 999999999999))
            chat = Chat.objects.create(
                # participants = self.master,
                url=self.room_name)
            chat.save()

            chat.participants.add(quest_contact, master_contact)
        connection.close()
        ws_url = settings.WS_CHAT_URL+self.room_name+"/"
        data = {"websocket_url":ws_url}

        return Response(data)

class ChatListView(APIView):

    def get(self,request):

        object = Chat.objects.filter(participants__user=1) #TODO request.user
        page = request.query_params.get('page',1)
        paginator = Paginator(object,10)
        try:
            chats = paginator.page(page)
        except:
            return Response([])
        user  = User.objects.get(id=1)          #TODO request.user
        res = []
        for chat in chats:
            if chat.participants.count() == 1:
                continue
            tmp = {}
            tmp['id'] = chat.id   #return unique chat id
            ws_url = settings.WS_CHAT_URL+chat.url+'/'
            tmp['url'] = ws_url
            for participant in chat.participants.all():
                if participant.user.username == user.username:
                    continue
                tmp['username'] = participant.user.username
                tmp['first_name'] = participant.user.first_name
                tmp['last_name'] = participant.user.last_name
                tmp['last_login'] = str(int(datetime.timestamp(participant.user.last_login)))
                try:
                    url = settings.SITE_URL + participant.user.avatar.file.url
                    tmp['avatar'] = url
                except:
                    tmp['avatar'] = 'none'

            res.append(tmp)
        return Response(res)