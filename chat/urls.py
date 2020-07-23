# chat/urls.py
from django.urls import path

from .views import (
    ChatGiveView,
)


urlpatterns = [
    path('<int:pk>', ChatGiveView.as_view()),
]