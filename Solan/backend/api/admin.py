from django.contrib import admin
from .models.user import *
from .models.startup import Startup
from .models.council_position import CouncilPosition
from .models.position import Position
from .models.blogpost import BlogPost
from .models.partner import Partner

# Register your models here.

admin.site.register(Startup)
admin.site.register(User)
admin.site.register(Position)
admin.site.register(CouncilPosition)
admin.site.register(BlogPost)
admin.site.register(Partner)