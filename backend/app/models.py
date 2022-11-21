from django.db import models


# Create your models here.
class Car(models.Model):
    car_name = models.CharField(max_length=255)
    date_of_listing = models.DateField(null=True, blank=True)
    tag = models.CharField(max_length=255, null=True, blank=True)
    engine = models.CharField(max_length=255, null=True, blank=True)
    horsepower = models.PositiveIntegerField(null=True, blank=True)
    torque = models.PositiveIntegerField(null=True, blank=True)
    sixty_mph = models.DecimalField(max_digits=5, decimal_places=1, null=True, blank=True)
    bidding_status = models.CharField(max_length=255)
    date_listing_ends = models.DateField(null=True, blank=True)

    class Meta:
        verbose_name = 'car'
        verbose_name_plural = 'cars'

    def __str__(self):
        return self.car_name
