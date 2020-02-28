from ..models.info import Info
from rest_framework.serializers import ModelSerializer

class InfoSerializer(ModelSerializer):
    class Meta:
        model = Info
        fields = '__all__'