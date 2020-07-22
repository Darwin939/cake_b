# chat/urls.py
from django.urls import path

from .views import (
    ChatListView,
    ChatDetailView,
    ChatGiveView,
    ChatUpdateView,
    ChatDeleteView
)


urlpatterns = [
    # path('', views.index, name='index'),
    # path('<str:room_name>/', views.room, name='room'),
    path('', ChatListView.as_view()),
    path('user/<int:pk>/create/', ChatGiveView.as_view()),
    path('<int:pk>', ChatDetailView.as_view()),
    path('<int:pk>/update/', ChatUpdateView.as_view()),
    path('<int:pk>/delete/', ChatDeleteView.as_view())
]