from django.db import models

class Position(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

    @property
    def is_leader(self):
         return self.name == "Leder"

    @property
    def is_deputy(self):
        return self.name == "Nestleder/Økonomiansvarlig"

    @property
    def is_communications(self):
        return self.name == "Kommunikasjonsansvarlig"

    @property
    def is_office(self):
        return self.name == "Kontoransvarlig"

    @property
    def is_social(self):
        return self.name == "Sosialansvarlig"




