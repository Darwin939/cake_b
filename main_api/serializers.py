from django.conf import settings

from .models import Review, Order, Profile,Avatar
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.reverse import reverse


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["bio", 'location', 'birth_date','instagram']


class MyProfileSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField(required=False)
    bio = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    instagram = serializers.CharField()
    is_active = serializers.BooleanField()
    email = serializers.CharField(required=False)
    birth_date = serializers.DateField()
    location = serializers.CharField()
    avatar = serializers.CharField()


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()


    url = serializers.HyperlinkedIdentityField(
        view_name='api:user'
    )

    class Meta:
        model = User
        depth = 1
        fields = ['id', 'username','profile', 'first_name', "last_name", 'email', 'is_active', 'url','avatar']

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.save()
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
        profile.instagram = profile_data.get(
            'instagram',
            profile.instagram
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

class CustomerSerializer(serializers.ModelSerializer):
    """
    User information without profile model
    """
    url = serializers.HyperlinkedIdentityField(
        view_name='api:user'
    )
    class Meta:
        model = User
        depth = 1
        fields = ['id', 'username', 'first_name', "last_name", 'is_active', 'avatar','url']



class ReviewSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(read_only=True)

    class Meta:
        model = Review

        fields = ['id', 'title', 'description',
                  'created_at', 'rating', 'customer']


class TodoSerializer(serializers.ModelSerializer):
    customer = UserSerializer(read_only=True)
    url = serializers.HyperlinkedIdentityField(
        view_name='api:todo'
    )

    class Meta:
        model = Order
        fields = ['id', 'title', "url", "deadline", 'description', 'is_active', "customer"]
        read_only_fields = ['id', 'title', "deadline", 'description', 'url']


class RatingSerializer(serializers.Serializer):
    counts = serializers.JSONField()
    average = serializers.IntegerField()
    quantity = serializers.IntegerField()


class FileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Avatar
        fields = "__all__"
    def update(self, instance, validated_data):

        instance.file = validated_data.get('file', instance.file)
        instance.user = validated_data.get('user',instance.user)
        instance.save()
        return instance

class AvatarSerializer(serializers.Serializer):
    file = serializers.CharField()
    user =  serializers.IntegerField()
    #
    # def create(self, validated_data):
    #     profile = Profile.objects.get(user='1')
    #     print(validated_data)
    #     profile.file = 'validated_data'
    #     profile.save()
    #     return profile