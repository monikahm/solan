from django.contrib.auth import logout as django_logout
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView


class LogoutView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        django_logout(request)
        return Response(status=204)
