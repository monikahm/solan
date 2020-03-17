from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from ..managers.user import UserManager
from django.contrib.auth.models import PermissionsMixin


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    member = models.BooleanField(default=False)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    superuser = models.BooleanField(default=False)
    photo = models.ImageField(upload_to='api/photos')

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        if self.get_full_name() != ' ':
            return self.get_full_name()
        else:
            return self.email

    def get_full_name(self):
        return self.first_name + ' ' + self.last_name

    @property
    def is_superuser(self):
        return self.superuser

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_admin(self):
        return self.admin

    @property
    def is_member(self):
        return self.member