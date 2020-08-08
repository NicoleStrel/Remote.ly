from django.contrib import admin
from django.db import models

# Register your models here.
from .models import UserProfile
admin.site.register(UserProfile)