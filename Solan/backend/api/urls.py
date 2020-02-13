from rest_framework import routers
from .views.startups import StartupsView
from django.urls import path, include
from .views.login import LoginView
from .views.logout import LogoutView
from.views.user_create import CreateUserView
from .views.profile import ProfileView


router = routers.DefaultRouter()
router.register('api/startups', StartupsView, 'startups')
router.register('api/profile', ProfileView, 'profile')

urlpatterns = [
    path('', include(router.urls)),
    path('api/login', LoginView.as_view()),
    path('api/logout', LogoutView.as_view()),
    path('api/register', CreateUserView.as_view())
    ]