from .models import Review, Order, Profile
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(queryset=Profile.objects.all())

    class Meta:

        model = Profile
        depth = 1
        fields = ["user",'bio','location','is_cooker',"birth_date","rating"]


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        depth = 2
        model = Order
        fields = ['id', 'title', "deadline", 'description', 'is_active', 'weight', 'price', 'created_at', 'updated_at',
                  'customer', 'worker']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'title', 'description', 'updated_at',
                  'created_at', 'rating', 'customer', 'worker']

# from main_api.serializers import OrderSerializer
# ser = OrderSerializer()
# print (ser)
