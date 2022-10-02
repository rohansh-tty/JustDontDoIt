from django.shortcuts import render
from .serializers import BucketListSerializer, TodoSerializer
from .models import Todo, BucketList
from rest_framework import status, viewsets
from rest_framework.response import Response

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer 
    queryset = Todo.objects.all()
    
    # def get(self, request):
    #     todo = Todo.objects.all()
    #     serializer = TodoSerializer(todo, many=True)
    #     return Response(serializer.data)
     
    
    # def post(self, request):
    #     serializer = TodoSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class BucketListView(viewsets.ModelViewSet):
    serializer_class = BucketListSerializer
    queryset = BucketList.objects.all()