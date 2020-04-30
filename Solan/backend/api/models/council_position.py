from django.db import models

class CouncilPosition(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='api/photos')

    def __str__(self):
        return self.position