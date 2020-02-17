from django.contrib import admin
from .models.user import *
from .models.startups import Startups
from .models.council_position import CouncilPosition
from .models.position import Position
from .models.blogposts import BlogPosts

# Register your models here.

admin.site.register(Startups)
admin.site.register(User)
admin.site.register(Position)
admin.site.register(CouncilPosition)
admin.site.register(BlogPosts)