from django.urls import path

from authorization import views

app_name = 'authorization'

urlpatterns = [
    path('', views.UserCreate.as_view()),
]