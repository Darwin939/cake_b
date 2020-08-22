from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import FileUploadParser, JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Order, User, Review, Avatar
from .serializers import OrderSerializer, UserSerializer, TodoSerializer, ReviewSerializer, RatingSerializer, \
    FileSerializer, AvatarSerializer, MyOrderSerializer
from .serializers import MyProfileSerializer
from rest_framework import generics, status, permissions
from .filters import OrderFilter


from rest_framework.authentication import SessionAuthentication, BasicAuthentication

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

class OrderList(generics.ListCreateAPIView):  # TODO заказы без воркера
    queryset = Order.objects.order_by('-created_at')
    serializer_class = OrderSerializer
    filterset_class = OrderFilter
    permission_classes = [permissions.IsAuthenticated]
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
    # queryset = User.objects.get(id=request.user)  # session user / request.user
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
    def get_serializer_class(self):
        return MyProfileSerializer


    def get(self, request, *args, **kwargs):
        user = User.objects.get(id=request.user.id)  # request.user.id
        try:
            url = settings.SITE_URL + user.avatar.file.url
        except:
            url = None
        serializer = MyProfileSerializer(data={'id': user.id, "username": user.username,
                                               'bio': user.profile.bio, 'first_name': user.first_name,
                                               "last_name": user.last_name, 'instagram': user.profile.instagram,
                                               'is_active': user.is_active, "location": user.profile.location,
                                               'email': user.email, 'birth_date': user.profile.birth_date,
                                               'avatar': url})
        serializer.is_valid()
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, *args, **kwargs):
        user = User.objects.get(id=request.user.id)
        data = JSONParser().parse(request)
        user.profile.bio = data['bio']
        user.first_name = data['first_name']
        user.last_name = data['last_name']
        user.profile.instagram = data['instagram']
        user.profile.location = data['location']
        user.email = data['email']
        user.profile.birth_date = data['birth_date']

        user.save()

        serializer = MyProfileSerializer(data={'id': user.id, "username": user.username,
                                               'bio': user.profile.bio, 'first_name': user.first_name,
                                               "last_name": user.last_name, 'instagram': user.profile.instagram,
                                               'is_active': user.is_active, "location": user.profile.location,
                                               'email': user.email, 'birth_date': user.profile.birth_date,
                                               'avatar': user.avatar.file.url})
        serializer.is_valid()
        return Response(serializer.data)


class UserTodos(generics.ListAPIView):
    """
    :return all user todos by descending deadline
    """
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        queryset = Order.objects.filter(worker_id=self.request.user.id).order_by("-deadline")  # self.request.user.id
        # self.request.user.id
        return queryset

    serializer_class = TodoSerializer


class UserTodo(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = TodoSerializer


class UserReview(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Review.objects.filter(worker_id=1).order_by('-created_at')  # TODO request.user
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        user = User.objects.get(pk=3)  # TODO in production set to self.request.user
        worker = User.objects.get(pk=1)
        serializer.save(customer=user, worker=worker)


class Rating(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):

        queryset = Review.objects.filter(worker_id=request.user.id)  # TODO request.user
        counts = [{"number": '5', 'value': 0},
                  {"number": '4', 'value': 0},
                  {"number": '3', 'value': 0},
                  {"number": '2', 'value': 0},
                  {"number": '1', 'value': 0}]
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
        try:
            average = (5 * counts[0]['value'] + 4 * counts[1]['value'] + 3 * counts[2]['value'] + 2 * counts[3][
                "value"] +
                       counts[4]['value']) / quantity
        except ZeroDivisionError:
            average = 0
        data = {'counts': counts, 'quantity': quantity, 'average': average}
        serializer = RatingSerializer(data)
        data = serializer.data
        return Response(data)


class FileUpload(APIView):
    parser_class = (FileUploadParser,)
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request, *args, **kwargs):
        user = User.objects.get(id=request.user.id)
        avatar = Avatar.objects.filter(user=request.user)

        try:
            avatar[0].delete()
        except:
            pass
        data = request.data.update({"user": user.id})
        file_serializer = FileSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        user = User.objects.get(id=request.user.id)

        url = settings.SITE_URL + user.avatar.file.url

        file_serializer = AvatarSerializer(data={'file': url, 'user': user.id})
        if file_serializer.is_valid():
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MyOrders(generics.ListAPIView):
    """
    All my(cooker orders)
    """
    permission_classes = [permissions.IsAuthenticated]
    queryset = Order.objects.filter(worker_id=1).order_by('-created_at')  # TODO request.user
    serializer_class = MyOrderSerializer
