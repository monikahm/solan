from ..serializers.council_position import CouncilPositionSerializer
from ..models.council_position import CouncilPosition
from rest_framework.viewsets import GenericViewSet, mixins

class CouncilPositionView(GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = CouncilPositionSerializer
    queryset = CouncilPosition.objects.all()