from ..models.quote import Quote
from rest_framework.serializers import ModelSerializer

class QuoteSerializer(ModelSerializer):
    class Meta:
        model = Quote
        fields = '__all__'