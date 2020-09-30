from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from rest_framework.urlpatterns import format_suffix_patterns
from main_api.views import MyProfile

app_name = 'customer_api'

urlpatterns = [
    # path('make_order/', ),
    path('myprofile/',MyProfile.as_view()),
    # path('my_orders/',)
]