from ..serializers.login import LoginSerializer
from django.contrib.auth import login as django_login
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView


class LoginView(APIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        django_login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, 'id': user.id}, status=200)

class ValidateTokenView(APIView):
    def post(self, request):
        return Response({"valid": request.user.is_authenticated}, status=200)
