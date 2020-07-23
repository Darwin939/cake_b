
from django.shortcuts import render, get_object_or_404
from .models import Chat, Contact ,User



def get_last_10_messages(chatId):
    chat = get_object_or_404(Chat, url = chatId)
    return chat.messages.order_by('-timestamp').all()[:10]  #30


def get_user_contact(username):
    user = get_object_or_404(User, username=username)
    return get_object_or_404(Contact, user=user)


def get_current_chat(chatId):
    return get_object_or_404(Chat, url = chatId)