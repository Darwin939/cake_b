from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Order, User, Review
from .serializers import OrderSerializer, UserSerializer, TodoSerializer, ReviewSerializer, RatingSerializer
from rest_framework import generics
from .filters import OrderFilter


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.order_by('-created_at')
    serializer_class = OrderSerializer
    filterset_class = OrderFilter
    def perform_create(self, serializer):
        user = User.objects.get(pk=1)  # TODO in production set to self.request.user
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


class UserReview(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        user = User.objects.get(pk=1)  # TODO in production set to self.request.user
        worker = User.objects.get(pk=2)
        serializer.save(customer=user, worker=worker)


import json


class Rating(APIView):

    def get(self, request):

        queryset = Review.objects.filter(worker_id=2)
        counts = {'1': 0,
                  '2': 0,
                  '3': 0,
                  '4': 0,
                  '5': 0}
        quantity = 0

        for query in queryset:
            if query.rating == 1:
                counts['1'] += 1
            elif query.rating == 2:
                counts['2'] += 1
            elif query.rating == 3:
                counts['3'] += 1
            elif query.rating == 4:
                counts['4'] += 1
            elif query.rating == 5:
                counts['5'] += 1
            quantity += 1

        average = (5 * counts['5'] + 4 * counts['4'] + 3 * counts['3'] + 2 * counts["2"] + counts['1']) / quantity
        data = {'counts': counts, 'quantity': quantity, 'average': average}
        serializer = RatingSerializer(data)
        data = serializer.data
        return Response(data)
