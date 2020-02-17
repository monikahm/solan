from rest_framework import generics
from ..serializers.user_create import *
from django.contrib.auth import get_user_model
User = get_user_model()


class CreateUserView(generics.CreateAPIView):
    serializer_class = CreateUserSerializer
    queryset = User.objects.all()