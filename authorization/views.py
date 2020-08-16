import json

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from django.shortcuts import redirect, render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth import logout
from authorization.serializer import UserSerializer


@method_decorator(csrf_exempt, name='dispatch')
class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        req = request.POST.dict()
        username = req["username"]
        password = req['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request,user)
            return render(request, "index.html").set_cookie('cookie_name', 'cookie_value')
        else:
            return JsonResponse(({"detail": "login or password incorrect"}))
    return JsonResponse(({"username": "myusername",
                         "password": "mypassword"}))

@csrf_exempt
def logout_view(request):
    logout(request)
    return  JsonResponse({"detail":"you succesfully login outed"})