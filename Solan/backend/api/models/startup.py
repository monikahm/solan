from django.db import models

class Startup(models.Model):
    name = models.CharField(max_length=50)
    url = models.CharField(max_length=120)
    photo = models.ImageField(upload_to='api/photos')

    def __str__(self):
        return self.name
    