from ..serializers.blogposts import BlogPostsSerializer
from ..models.blogposts import BlogPosts
from rest_framework.viewsets import GenericViewSet, mixins

class BlogPostsView(GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = BlogPostsSerializer
    queryset = BlogPosts.objects.all()