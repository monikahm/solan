from django.db import models

class Startup(models.Model):
    name = models.CharField(max_length=50)
    info = models.TextField(max_length=1000)
    photo = models.ImageField(upload_to='api/photos')

    def __str__(self):
        return self.name
    