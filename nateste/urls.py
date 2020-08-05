from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(('main_api.urls'), namespace="api")),
    path('chat/',include(('chat.urls'))),
    path('auth/',include('rest_framework.urls')),
    path('register/',include('authorization.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
