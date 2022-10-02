from django.db import models

# Create your models here.
class Todo(models.Model):
    task_id = models.AutoField(primary_key=True)    
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
    
class BucketList(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=500)
    completed = models.BooleanField(default=False)
    link = models.URLField()
    
    def __str__(self):
        return f"{self.title} - {self.link}"
    
    