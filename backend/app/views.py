from datetime import datetime, timedelta

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Car
from .serializers import CarSerializer


# Create your views here.
# Get all car data
@api_view(['GET'])
def getCars(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)


# Get the first data in the database
# which is given by the design doc
@api_view(['GET'])
def getCar(request):
    car = Car.objects.all().first()
    serializer = CarSerializer(car, many=False)
    return Response(serializer.data)


# Get the car data whose listing end date is later than today
@api_view(['GET'])
def getExtraCar(request):
    car = Car.objects.all().filter(date_listing_ends__gte=datetime.now() + timedelta(days=1)).first()
    serializer = CarSerializer(car, many=False)
    return Response(serializer.data)


# Get the car data by id
# This is not used in the project so far
# @api_view(['GET'])
# def getCarByID(request, pk):
#     car = Car.objects.get(id=pk)
#     serializer = CarSerializer(car, many=False)
#     return Response(serializer.data)
