from ..serializers.info import InfoSerializer
from ..models.info import Info
from rest_framework.viewsets import GenericViewSet, mixins

class InfoView(GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = InfoSerializer
    queryset = Info.objects.all()