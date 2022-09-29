from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BucketListSerializer, TodoSerializer
from .models import Todo, BucketList

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer 
    queryset = Todo.objects.all()

class BucketListView(viewsets.ModelViewSet):
    serializer_class = BucketListSerializer
    queryset = BucketList.objects.all()