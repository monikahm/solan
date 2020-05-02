from django.test import TestCase
from .models.user import User

class UserTest(TestCase):
    def setUp(self):
        User.objects.create(first_name="Ola", last_name="Nordmann")


    def test_get_full_name(self):
        user = User.objects.get(first_name="Ola")
        self.assertIsInstance(user,User)
        self.assertEqual(user.get_full_name(), "Ola Nordmann")
        self.assertNotEqual(user.get_full_name(), "OlaNordmann")
