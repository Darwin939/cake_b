from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render


def index(request):
    return render(request, "index.html")
# def auth(request):
#     if request.method == 'POST':
#         user = request.POST.dict()
#         name = user['uname']
#         passw = user['psw']
#         print(name,passw)
#         user = authenticate(username=name, password=passw)
#         return HttpRequest()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(('main_api.urls'), namespace="api")),
    path('chat/',include(('chat.urls'))),
    path('auth/',include('authorization.urls')),
    path('',index , name = "mainpage"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)