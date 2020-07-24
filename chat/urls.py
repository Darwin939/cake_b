# chat/urls.py
from django.urls import path

from .views import (
    ChatGiveView,
    ChatListView
)


urlpatterns = [
    path('<int:pk>', ChatGiveView.as_view()),
    path('chats/', ChatListView.as_view())
]