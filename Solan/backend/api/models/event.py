from django.db import models
from django.conf import settings

class Event(models.Model):
    title = models.CharField(max_length=150)
    date = models.DateField()
    time = models.CharField(max_length=100)
    content = models.TextField(max_length=1000)
    signup_link = models.CharField(max_length=250)
    photo = models.ImageField(upload_to='api/photos',blank=True)

    def __str__(self):
        return self.title