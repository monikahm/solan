from ..models.startups import Startups
from rest_framework.serializers import ModelSerializer

class StartupsSerializer(ModelSerializer):
    class Meta:
        model = Startups
        fields = '__all__'