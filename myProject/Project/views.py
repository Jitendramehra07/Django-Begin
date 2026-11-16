from django.shortcuts import render

# Create your views here.

def all_Project(request):
    return render(request,'Project/all_Project.html')