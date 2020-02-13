from ..serializers.startups import StartupsSerializer
from ..models.startups import Startups
from rest_framework.viewsets import GenericViewSet, mixins

class StartupsView(GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = StartupsSerializer
    queryset = Startups.objects.all()