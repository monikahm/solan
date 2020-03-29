from django.contrib import admin
from .models.user import *
from .models.startup import Startup
from .models.council_position import CouncilPosition
from .models.blogpost import BlogPost
from .models.partner import Partner
from .models.info import Info
from .models.quote import Quote
from .models.event import Event
from django.forms import TextInput, Textarea
from django.db import models

class YourModelAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.CharField: {'widget': TextInput(attrs={'size':'80'})},
        models.TextField: {'widget': Textarea(attrs={'rows':16, 'cols':80})},
    }

# Register your models here.

admin.site.register(Startup, YourModelAdmin)
admin.site.register(User, YourModelAdmin)
admin.site.register(CouncilPosition, YourModelAdmin)
admin.site.register(BlogPost, YourModelAdmin)
admin.site.register(Partner, YourModelAdmin)
admin.site.register(Info, YourModelAdmin)
admin.site.register(Quote, YourModelAdmin)
admin.site.register(Event, YourModelAdmin)
