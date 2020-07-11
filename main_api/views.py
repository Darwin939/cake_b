from rest_framework.generics import get_object_or_404
from rest_framework.parsers import FileUploadParser, JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Order, User, Review ,Profile
from .serializers import OrderSerializer, UserSerializer, TodoSerializer, ReviewSerializer, RatingSerializer , FileSerializer
from .serializers import MyProfileSerializer
from rest_framework import generics, status
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
    queryset = User.objects.get(id=1)

    def get_serializer_class(self):
        return MyProfileSerializer

    def get(self, request, *args, **kwargs):
        user = User.objects.get(id = 1)
        serializer = MyProfileSerializer(data={'id':user.id,"username":user.username,
                                               'bio':user.profile.bio,'first_name':user.first_name,
                                               "last_name":user.last_name,'instagram':user.profile.instagram,
                                               'is_active':user.is_active,"location":user.profile.location,
                                               'email':user.email,'birth_date':user.profile.birth_date})
        serializer.is_valid()
        return Response(serializer.data)
    def put(self, request, *args, **kwargs):
        user = User.objects.get(id=1)
        data = JSONParser().parse(request)
        user.profile.bio = data['bio']
        user.first_name = data['first_name']
        user.last_name = data['last_name']
        user.profile.location = data['location']
        user.email = data['email']
        user.profile.birth_date = data['birth_date']

        user.save()

        serializer= MyProfileSerializer(data={'id':user.id,"username":user.username,
                                               'bio':user.profile.bio,'first_name':user.first_name,
                                               "last_name":user.last_name,'instagram':user.profile.instagram,
                                               'is_active':user.is_active,"location":user.profile.location,
                                               'email':user.email,'birth_date':user.profile.birth_date})
        serializer.is_valid()
        return Response(serializer.data)
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
        counts = [{"number":'5','value':0},
                  {"number":'4','value':0},
                  {"number":'3','value':0},
                  {"number":'2','value':0},
                  {"number":'1','value':0}]
        quantity = 0

        for query in queryset:
            if query.rating == 1:
                counts[4]['value'] += 1
            elif query.rating == 2:
                counts[3]['value'] += 1
            elif query.rating == 3:
                counts[2]['value'] += 1
            elif query.rating == 4:
                counts[1]['value'] += 1
            elif query.rating == 5:
                counts[0]['value'] += 1
            quantity += 1
        print (counts)
        average = (5 * counts[0]['value'] + 4 * counts[1]['value'] + 3 * counts[2]['value'] + 2 * counts[3]["value"] + counts[4]['value']) / quantity
        data = {'counts': counts, 'quantity': quantity, 'average': average}
        serializer = RatingSerializer(data)
        data = serializer.data
        return Response(data)

class FileUpload(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):

        file_serializer = FileSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
