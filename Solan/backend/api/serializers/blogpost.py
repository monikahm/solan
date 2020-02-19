from ..models.blogpost import BlogPost
from rest_framework.serializers import ModelSerializer

class BlogPostSerializer(ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'