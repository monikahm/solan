from django.urls import path, include
from rest_framework import routers
from .views.startups import StartupsView

router = routers.DefaultRouter()
router.register('api/startups', StartupsView)

urlpatterns = router.urls
