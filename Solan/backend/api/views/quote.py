from ..serializers.quote import QuoteSerializer
from ..models.quote import Quote
from rest_framework.viewsets import GenericViewSet, mixins

class QuoteView(GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()