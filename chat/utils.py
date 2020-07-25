
from django.shortcuts import render, get_object_or_404
from .models import Chat, Contact ,User
from django.core.paginator import Paginator



def get_last_messages(url,page):
    """
    Get last messages by page
    :param url: room name
    :param page:
    :return: 15 last messages
    """
    chat = get_object_or_404(Chat, url = url)
    messages = chat.messages.order_by('-timestamp').all()
    paginator = Paginator(messages,50   )
    try:
        res = paginator.page(page)
    except:
        res = []
    return res


def get_user_contact(username):
    user = get_object_or_404(User, username=username)
    return get_object_or_404(Contact, user=user)


def get_current_chat(url):
    return get_object_or_404(Chat, url = url)