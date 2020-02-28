from django.db import models

class CouncilPosition(models.Model):
    name = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    info = models.TextField(max_length=300)
    photo = models.ImageField(upload_to='api/photos',blank=True)

    def __str__(self):
        return self.name