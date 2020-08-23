from django.conf.urls import url
from django.urls import  path ,re_path

from . import consumers

websocket_urlpatterns = [
    # path("ws/chat/",consumers.ChatConsumer),
    re_path(r'ws/chat/', consumers.ChatConsumer), #(?P<room_name>\w+)/$
    # re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer),
]




