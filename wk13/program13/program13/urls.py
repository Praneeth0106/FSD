from django.contrib import admin
from django.urls import path
from . import index

urlpatterns = [
    path('', index.home, name='home'),
    path('dashboard/', index.dashboard, name='dashboard'),
    path('contactUs/', index.contactUs, name='contactUs'),
]
