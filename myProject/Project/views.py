from django.shortcuts import render
from .models import FoodVariety
# Create your views here.

def all_Project(request):
    foods = FoodVariety.objects.all()
    return render(request,'Project/all_Project.html',{'foods':foods})

