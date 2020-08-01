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
    chat = get_current_chat(sender, recipient)
    messages = get_chat_messages(chat)
    unread = messages.filter(contact__user_id=recipient)
    unread.update(was_read=True)

    paginator = Paginator(messages, 50)
    try:
        res = paginator.page(page)
    except:
        res = []
    return res


def get_last_message(sender_id, recipient_id):
    """
    Возвращает последнее сообщение с датой
    :return: dict
    """
    result = {}

    try:
        chat = get_current_chat(sender_id, recipient_id)
        message = get_chat_messages(chat)[0]
        result["id"] = message.id_in_chat
        result["content"] = message.content
        result["author"] = message.contact.user.username
        result["timestamp"] = str(int(datetime.timestamp(message.timestamp)))
    except:
        pass

    return result


def get_user_contact(id):
    user = get_object_or_404(User, id=id)
    return get_object_or_404(Contact, user=user)


def get_chat_messages(chat):
    """
    Сообщения отсортированные по времени
    :param chat:
    :return:
    """

    messages = chat.messages.order_by('-timestamp').all()

    return messages


def get_current_chat(sender, recipient):
    """

            :param id:
            :return:
            """
    chat = Chat.objects.filter(
        participants__user_id=sender
    ).filter(participants__user_id=recipient).first()

    return chat


def list_chats(data, user_id):
    """
                Чаты с последними сообщения ,
                сортируя по последним сообщениям
                :param data:
                :return:
    """
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
            tmp["last_message"] = get_last_message(sender_id=user_id,
                                                   recipient_id=tmp["user_id"])
            try:
                tmp["last_message_time"] = get_last_message(sender_id=user_id,
                                                            recipient_id=tmp["user_id"])['timestamp']
            except:
                tmp["last_message_time"] = ""

            try:
                url = settings.SITE_URL + participant.user.avatar.file.url
                tmp['avatar'] = url
            except:
                tmp['avatar'] = 'none'

        chat_list.append(tmp)
    chat_list = sorted(chat_list, key=lambda x: x["last_message_time"], reverse=True)
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


def return_new_unread_message(user_id, sender_id):
    chat = Chat.objects.filter(
        participants__user_id=user_id
    ).filter(participants__user_id=sender_id).first()
    messages = chat.messages.filter(was_read=False, contact__user_id=user_id)
    tmp = []

    for message in messages:
        a = {}
        a["id"] = message.id_in_chat
        a["content"] = message.content
        a["timestamp"] = str(int(datetime.timestamp(message.timestamp)))
        a["author"] = message.contact.user.username

        tmp.append(a)

    return tmp


def message_to_json(self, message):
    return {
        'id': message.id_in_chat,
        'content': message.content,
        'timestamp': str(int(datetime.timestamp(message.timestamp))),
        'author': message.contact.user.username
    }


def messages_to_json(self, messages):
    result = []
    for message in messages:
        result.append(message_to_json(message))
    return result
