from rest_framework.response import Response

from .models import Order, User
from .serializers import OrderSerializer, UserSerializer
from rest_framework import generics, viewsets
from rest_framework.views import APIView

class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class CreateUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

from .serializers import NewOrderSerializer

class new_ser(APIView):
    def get(self,request):
        orders = Order.objects.all()
        serializer = NewOrderSerializer(orders, many=True)
        return Response({"articles": serializer.data})