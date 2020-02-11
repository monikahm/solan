from ..serializers.startups import StartupsSerializer
from ..models.startups import Startups
from rest_framework.viewsets import GenericViewSet

class StartupsView(GenericViewSet):
    serializer_class = StartupsSerializer
    queryset = Startups.objects.all()
    search_fields = ('name')