from ..serializers.user import *
from django.contrib.auth import get_user_model
from rest_framework import viewsets, mixins

User = get_user_model()


class UserView(viewsets.GenericViewSet,mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
