from ..models.partner import Partner
from rest_framework.serializers import ModelSerializer

class PartnerSerializer(ModelSerializer):
    class Meta:
        model = Partner
        fields = '__all__'