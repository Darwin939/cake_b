
from .models import Order, User ,Profile
from .serializers import OrderSerializer, UserSerializer
from rest_framework import generics


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class CreateUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


