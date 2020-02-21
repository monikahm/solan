from rest_framework import routers
from .views.startup import StartupView
from django.urls import path, include
from .views.login import LoginView
from .views.logout import LogoutView
from.views.user_create import CreateUserView
from .views.profile import ProfileView
from .views.council_position import CouncilPositionView
from .views.blogpost import BlogPostView
from .views.partner import PartnerView
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register('api/startups', StartupView, 'startups')
router.register('api/profile', ProfileView, 'profile')
router.register('api/councilposition', CouncilPositionView, 'council_position')
router.register('api/blogposts', BlogPostView, 'blogposts')
router.register('api/partners', PartnerView, 'partners')

urlpatterns = [
    path('', include(router.urls)),
    path('api/login', LoginView.as_view()),
    path('api/logout', LogoutView.as_view()),
    path('api/register', CreateUserView.as_view())
    ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)