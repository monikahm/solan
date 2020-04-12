from rest_framework import routers
from .views.startup import StartupView
from django.urls import path, include
from django.conf.urls import url
from .views.login import LoginView, ValidateTokenView
from .views.logout import LogoutView
from.views.user_create import CreateUserView
from .views.profile import ProfileView
from .views.council_position import CouncilPositionView
from .views.blogpost import BlogPostView
from .views.partner import PartnerView
from .views.quote import QuoteView
from .views.info import InfoView
from .views.event import EventView
from .views.dataporten import *
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register('api/startups', StartupView, 'startups')
router.register('api/profiles', ProfileView, 'profile')
router.register('api/councilposition', CouncilPositionView, 'council_position')
router.register('api/blogposts', BlogPostView, 'blogposts')
router.register('api/partners', PartnerView, 'partners')
router.register('api/info', InfoView, 'info')
router.register('api/quote', QuoteView, 'quote')
router.register('api/event', EventView, 'event')


urlpatterns = [
    path('', include(router.urls)),
    path('api/login', LoginView.as_view()),
    path('api/valid', ValidateTokenView.as_view()),
    path('api/logout', LogoutView.as_view()),
    path('api/register', CreateUserView.as_view()),
    url(r'^study', study),
    url(r'^callback', study_callback),
    ]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)