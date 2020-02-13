from django.contrib import admin
from .models.user import *

from .models.startups import Startups

# Register your models here.

admin.site.register(Startups)
admin.site.register(User)
