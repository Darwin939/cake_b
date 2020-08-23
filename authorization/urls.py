from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from authorization import views
from .views import login_view,logout_view

app_name = 'authorization'

urlpatterns = [
    path('register/', csrf_exempt(views.register)),
    path('login/', csrf_exempt(login_view)),
    path('logout/',csrf_exempt(logout_view)),
]