from django.db import models
from .position import *

class CouncilPosition(models.Model):
    name = models.CharField(max_length=50)
    position = models.ForeignKey(Position, related_name='council_position', null=True, on_delete=models.SET(None))
    info = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='api/photos',blank=True)