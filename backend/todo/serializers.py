from rest_framework import serializers
from .models import Todo, BucketList


# meta class is inner class for Django's Model Class. Used to playaround with model behavior
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        '''Meta class to map serializer's fields with the model fields.'''
        model = Todo
        fields = ( 'title', 'description', 'completed')
        

class BucketListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BucketList
        fields = ( 'title', 'description', 'completed', 'link')