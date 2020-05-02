from django.db import models

class Info(models.Model):
    info = models.TextField(max_length=1000)
    photo = models.ImageField(upload_to='api/photos',blank=True)

    def __str__(self):
        return self.info
