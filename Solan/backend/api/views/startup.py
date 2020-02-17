from ..serializers.startup import StartupSerializer
from ..models.startup import Startup
from rest_framework.viewsets import GenericViewSet, mixins

class StartupView(GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = StartupSerializer
    queryset = Startup.objects.all()