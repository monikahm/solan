from django.db import models

class Quote(models.Model):
    quote = models.CharField(max_length=200)
    author = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.quote