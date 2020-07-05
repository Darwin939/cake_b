from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from .views import OrderList, CreateUser , UserProfile,UserTodos , UserTodo,MyProfile,UserReview
from .views import Rating
app_name = 'main_api'
urlpatterns = [
    path('orders/', OrderList.as_view()),
    path('create_user/', CreateUser.as_view()),
    path('user/<int:pk>',UserProfile.as_view(),name = 'user'),
    path('todo/',UserTodos.as_view()),
    path('todo/<int:pk>',UserTodo.as_view(),name='todo'),
    path('myprofile/',MyProfile.as_view()),
    path('review/',UserReview.as_view()),
    path('rating/',Rating.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
