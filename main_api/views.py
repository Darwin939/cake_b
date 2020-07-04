from rest_framework.generics import get_object_or_404

from .models import Order, User ,Profile
from .serializers import OrderSerializer, UserSerializer, TodoSerializer
from rest_framework import generics


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.order_by('-created_at')
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        user = User.objects.get(pk=1)   # TODO in production set to self.request.user
        serializer.save(customer=user)


class CreateUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserProfile(generics.RetrieveAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer

class MyProfile(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=1)
        return obj



class UserTodos(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = TodoSerializer



class UserTodo(generics.RetrieveUpdateAPIView):
    queryset = Order.objects.all()
    serializer_class = TodoSerializer