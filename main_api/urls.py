from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from .views import OrderList, CreateUser

urlpatterns = [
    path('orders/', OrderList.as_view()),
    path('create_user/', CreateUser.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
