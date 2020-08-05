from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny

from authorization.serializer import UserSerializer


class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )
