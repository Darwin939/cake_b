from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from .views import OrderList, CreateUser , UserProfile

urlpatterns = [
    path('orders/', OrderList.as_view()),
    path('create_user/', CreateUser.as_view()),
    path('user/<int:pk>',UserProfile.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
