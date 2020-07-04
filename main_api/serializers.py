from .models import Review, Order, Profile
from rest_framework import serializers
from django.contrib.auth.models import User


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ["bio", 'location', 'birth_date', 'rating']


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    class Meta:
        model = User
        depth = 0
        fields = ['id', 'username', 'profile','first_name',"last_name",'email','is_active','date_joined']


class OrderSerializer(serializers.ModelSerializer):
    customer = UserSerializer(read_only=True)
    worker = UserSerializer(read_only=True)

    class Meta:
        depth = 2
        model = Order
        fields = ['id', 'title', "deadline", 'description', 'is_active', 'weight', 'price', 'created_at', 'updated_at',
                  'worker', "customer"]
        read_only_fields = ["is_active"]


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'title', 'description', 'updated_at',
                  'created_at', 'rating', 'customer', 'worker']

# from main_api.serializers import OrderSerializer
# ser = OrderSerializer()
# print (ser)
