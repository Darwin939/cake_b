from rest_framework import serializers

from chat.models import Chat, Contact


class ContactSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value

class ChatSerializer(serializers.ModelSerializer):
    participants = ContactSerializer(many=True)

    class Meta:
        model = Chat
        fields = ('id',"messages",'participants')
        read_only = ('id')



