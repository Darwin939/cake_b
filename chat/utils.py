from django.conf import settings
from django.shortcuts import render, get_object_or_404
from .models import Chat, Contact, User
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
    res = []
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
            # tmp['last_login'] = str(int(datetime.timestamp(participant.user.last_login)))
            try:
                url = settings.SITE_URL + participant.user.avatar.file.url
                tmp['avatar'] = url
            except:
                tmp['avatar'] = 'none'

        res.append(tmp)
        return res
