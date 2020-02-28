from ..serializers.partner import PartnerSerializer
from ..models.partner import Partner
from rest_framework.viewsets import GenericViewSet, mixins

class PartnerView(GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = PartnerSerializer
    queryset = Partner.objects.all()