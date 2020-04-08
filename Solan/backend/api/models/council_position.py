from django.db import models

class CouncilPosition(models.Model):
    position = models.CharField(max_length=100)
    info = models.TextField(max_length=300)

    def __str__(self):
        return self.position