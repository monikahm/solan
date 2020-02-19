from django.db import models

class Partner(models.Model):
    url = models.CharField(max_length=150)
    logo = models.ImageField(upload_to='api/photos',blank=True)