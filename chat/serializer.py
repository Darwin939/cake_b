from rest_framework import serializers

from chat.models import Contact, Chat
from main_api.serializers import UserSerializer


class ContactSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class ContactUserSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        depth = 1
        model = Contact
        fields = ["id", "user"]


class ChatSerializer(serializers.ModelSerializer):
    participants = ContactUserSerializer(many=True)

    class Meta:
        model = Chat
        depth = 2
        fields = ['id', 'participants', 'url']
        read_only = ('id')

class MessageSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    content = serializers.CharField(max_length=2000)
    timestamp = serializers.DateTimeField()
    author = serializers.CharField(max_length=50)


class MessagesSerializer(serializers.Serializer):
    messages = MessageSerializer(many=True)