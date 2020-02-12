from rest_framework import routers
from .views.startups import StartupsView

router = routers.DefaultRouter()
router.register('api/startups', StartupsView, 'startups')

urlpatterns = router.urls