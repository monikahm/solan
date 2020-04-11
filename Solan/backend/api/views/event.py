from ..serializers.event import EventSerializer
from ..models.event import Event
from rest_framework.viewsets import GenericViewSet, mixins

class EventView(GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = EventSerializer
    queryset = Event.objects.all()