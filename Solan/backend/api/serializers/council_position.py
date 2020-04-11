from ..models.council_position import CouncilPosition
from rest_framework.serializers import ModelSerializer

class CouncilPositionSerializer(ModelSerializer):
    class Meta:
        model = CouncilPosition
        fields = ['name', 'position', 'info']