from ..models.startup import Startup
from rest_framework.serializers import ModelSerializer

class StartupSerializer(ModelSerializer):
    class Meta:
        model = Startup
        fields = '__all__'