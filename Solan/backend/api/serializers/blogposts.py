from ..models.blogposts import BlogPosts
from rest_framework.serializers import ModelSerializer

class BlogPostsSerializer(ModelSerializer):
    class Meta:
        model = BlogPosts
        fields = '__all__'