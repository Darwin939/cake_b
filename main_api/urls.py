from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from .views import OrderList, CreateUser,new_ser

urlpatterns = [
    path('orders/', OrderList.as_view()),
    path('create_user/', CreateUser.as_view()),
    path('new_orders/',new_ser.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
