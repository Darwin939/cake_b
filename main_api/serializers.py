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
        fields = ['id', 'username', 'profile','first_name',"last_name",'email','is_active']

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.is_active = validated_data.get('is_active', instance.is_active)
        profile.bio = profile_data.get(
            'bio',
            profile.bio
        )
        profile.location = profile_data.get(
            'location',
            profile.location
        )
        profile.birth_date = profile_data.get(
            'birth_date',
            profile.birth_date
        )
        profile.rating = profile_data.get(
            'rating',
            profile.rating
        )
        profile.save()

        return instance


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

class TodoSerializer(serializers.ModelSerializer):
    customer = UserSerializer(read_only=True)
    class Meta:
        model = Order
        fields = ['id', 'title', "deadline", 'description', 'is_active',"customer"]
        read_only_fields = ['id', 'title', "deadline", 'description']

# from main_api.serializers import OrderSerializer
# ser = OrderSerializer()
# print (ser)
