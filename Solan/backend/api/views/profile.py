from ..serializers.profile import ProfileSerializer
from django.contrib.auth import get_user_model
from rest_framework.viewsets import mixins,GenericViewSet


User = get_user_model()


class ProfileView(GenericViewSet,mixins.DestroyModelMixin,mixins.UpdateModelMixin,mixins.RetrieveModelMixin):

    serializer_class = ProfileSerializer
    queryset = User.objects.all()

