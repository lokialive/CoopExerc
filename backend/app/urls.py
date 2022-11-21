"""backend URL Configuration
"""
from django.urls import path
from . import views


urlpatterns = [
    path('cars/', views.getCars, name="cars"),
    path('car/', views.getCar, name='car'),
    path('car/extra/', views.getExtraCar, name='car'),
    # path('car/id/<str:pk>', views.getCarByID, name='car')
]
