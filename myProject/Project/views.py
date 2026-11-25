from django.shortcuts import render
from .models import FoodVariety
from django.shortcuts import get_object_or_404

# Create your views here.

def all_Project(request):
    foods = FoodVariety.objects.all()
    return render(request,'Project/all_Project.html',{'foods':foods})

def food_detail(request,food_id):
    food = get_object_or_404(FoodVariety,pk= food_id)
    return render(request,'Project/food_details.html',{'food':food})