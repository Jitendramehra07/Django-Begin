from django.db import models

from django.utils import timezone
# Create your models here.

class FoodVariety(models.Model):
    FOOD_TYPE_CHOICE=[
        ('PZ','PIZZA'),
        ('CH','CHAI'),
        ('CF','COFFEE'),
        ('ND','NOODLES'),
        ('FF','FRENCH FRIES'),
    ]
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='projects/')
    #we also need third party plug-in for images...
    date = models.DateTimeField(default=timezone.now)
    type = models.CharField(max_length=2,choices=FOOD_TYPE_CHOICE)
    description = models.TextField(default='')

    
    def __str__(self):
        return str(self.name)
    