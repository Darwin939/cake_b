from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import AllowAny
from django.contrib.auth import logout
from authorization.serializer import UserSerializer
import json

from main_api.views import CsrfExemptSessionAuthentication


# @method_decorator(csrf_exempt, name='dispatch')
# class UserCreate(generics.CreateAPIView):
#     authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = (AllowAny,)

@csrf_exempt
def register(request):
    if request.method == "POST":
        req = json.loads(request.body)
        username = req["username"]
        password = req['password']
        try:
            user  = User.objects.create_user(username=username,password=password)
            user.save()
        except Exception as e:
            user = None
            return  JsonResponse(({"detail": "login has been used"}))
        if user is not None:
            login(request,user)
            response = HttpResponse("registered")
            response.set_cookie('cookie_name', 'cookie_value')
            return response
        else:
            return JsonResponse(({"detail": "login has been used"}))
    return JsonResponse(({"username": "myusername",
                         "password": "mypassword"}))


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        req = json.loads(request.body)
        username = req["username"]
        password = req['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request,user)
            response = HttpResponse("work")
            response.set_cookie('cookie_name', 'cookie_value')
            return response
        else:
            return JsonResponse(({"detail": "login or password incorrect"}))
    return JsonResponse(({"username": "myusername",
                         "password": "mypassword"}))

@csrf_exempt
def logout_view(request):
    logout(request)
    response = HttpResponse('Cookies has been deleted')
    response.delete_cookie('cookie_name')
    return response



