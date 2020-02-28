from ..serializers.blogpost import BlogPostSerializer
from ..models.blogpost import BlogPost
from rest_framework.viewsets import GenericViewSet, mixins

class BlogPostView(GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = BlogPostSerializer
    queryset = BlogPost.objects.all()