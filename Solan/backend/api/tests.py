from django.test import TestCase
from .models.user import User
from .models.council_position import CouncilPosition
from .models.blogpost import BlogPost
from .models.event import Event
from .models.info import Info
from .models.quote import Quote
from .models.partner import Partner
from .models.startup import Startup

class UserTest(TestCase):
    def setUp(self):
        User.objects.create(first_name="Ola", last_name="Nordmann")


    def test_get_full_name(self):
        user = User.objects.get(first_name="Ola")
        self.assertIsInstance(user,User)
        self.assertEqual(user.get_full_name(), "Ola Nordmann")
        self.assertNotEqual(user.get_full_name(), "OlaNordmann")
        self.assertNotEqual(user.get_full_name(), "OlaNordmann")


class CouncilTest(TestCase):
    def setUp(self):
        CouncilPosition.objects.create(name="Ola", position="Sjef")

    def test_self(self):
        councilPosition = CouncilPosition.objects.get(name="Ola")
        self.assertIsInstance(councilPosition, CouncilPosition)
        self.assertEqual(councilPosition.__str__(), "Sjef")

class BlogPostTest(TestCase):
    def setUp(self):
        BlogPost.objects.create(title="Kul post")

    def test_self(self):
        blogPost = BlogPost.objects.get(title="Kul post")
        self.assertIsInstance(blogPost,BlogPost)
        self.assertEqual(blogPost.__str__(), "Kul post")

class EventTest(TestCase):
    def setUp(self):
        Event.objects.create(title="Kult event", date="2020-12-12")

    def test_self(self):
        event = Event.objects.get(title="Kult event")
        self.assertIsInstance(event, Event)
        self.assertEqual(event.__str__(),"Kult event")

class InfoTest(TestCase):
    def setUp(self):
        Info.objects.create(info="Veldig viktig informasjon")

    def test_self(self):
        info = Info.objects.get(info="Veldig viktig informasjon")
        self.assertIsInstance(info, Info)
        self.assertEqual(info.__str__(), "Veldig viktig informasjon")

class QuoteTest(TestCase):
    def setUp(self):
        Quote.objects.create(quote="Dette er en test")

    def test_self(self):
        quote = Quote.objects.get(quote="Dette er en test")
        self.assertIsInstance(quote, Quote)
        self.assertEqual(quote.__str__(), "Dette er en test")

class PartnerTest(TestCase):
    def setUp(self):
        Partner.objects.create(url="www.facebook.com")

    def test_self(self):
        partner = Partner.objects.get(url="www.facebook.com")
        self.assertIsInstance(partner, Partner)
        self.assertEqual(partner.__str__(), "www.facebook.com")


class StartupTest(TestCase):
    def setUp(self):
        Startup.objects.create(name="Google", url="www.google.com")

    def test_self(self):
        startup = Startup.objects.get(name="Google")
        self.assertIsInstance(startup, Startup)
        self.assertEqual(startup.__str__(), "Google")