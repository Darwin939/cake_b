from django.conf import settings
from django.shortcuts import render, get_object_or_404
from datetime import datetime

from .models import Chat, Contact, User, Message
from django.core.paginator import Paginator


def get_last_messages(recipient, sender, page):
    """
    Get last messages by page
    :param url: room name
    :param page:
    :return: 15 last messages
    """
    chat = Chat.objects.filter(
        participants__user_id=sender
    ).filter(participants__user_id=recipient).first()

    messages = chat.messages.order_by('-timestamp').all()
    messages.update(was_read = True)
    paginator = Paginator(messages, 50)
    try:
        res = paginator.page(page)
    except:
        res = []
    return res


def get_user_contact(id):
    user = get_object_or_404(User, id=id)
    return get_object_or_404(Contact, user=user)


def get_current_chat(url):
    return get_object_or_404(Chat, url=url)


def list_chats(data, user_id):
    object = Chat.objects.filter(participants__user=user_id)  # TODO request.user

    try:
        page = data['page']

    except:
        page = 1
    paginator = Paginator(object, 10)
    try:
        chats = paginator.page(page)
    except:
        return []
    user = User.objects.get(id=user_id)  # TODO request.user
    res = {}
    res['command'] = "list_chats"
    chat_list = []

    for chat in chats:
        if chat.participants.count() == 1:
            continue

        tmp = {}
        tmp['id'] = chat.id  # return unique chat id
        ws_url = chat.url
        tmp['url'] = ws_url
        for participant in chat.participants.all():
            if participant.user.username == user.username:
                continue
            tmp['username'] = participant.user.username
            tmp['first_name'] = participant.user.first_name
            tmp['last_name'] = participant.user.last_name
            # tmp['last_login'] = str(int(datetime.timestamp(participant.user.last_login)))  #if exist
            tmp['user_id'] = participant.user.id
            try:
                url = settings.SITE_URL + participant.user.avatar.file.url
                tmp['avatar'] = url
            except:
                tmp['avatar'] = 'none'


        chat_list.append(tmp)
    res['list_chats'] = chat_list
    return res

def read_messages(message):
    """
    Читать все сообщения
    менять was_read на True
    :param message:
    :return:
    """
    pass

def return_new_unread_message(user_id,sender_id):
    chat = Chat.objects.filter(
        participants__user_id=user_id
    ).filter(participants__user_id=sender_id).first()
    messages = chat.messages.filter(was_read = False,contact__user_id=user_id)
    tmp = []

    for message in messages:
        a = {}
        a["id"] = message.id_in_chat
        a["content"] = message.content
        a["timestamp"] = str(int(datetime.timestamp(message.timestamp)))
        a["author"] = message.contact.user.username

        tmp.append(a)


    return tmp

