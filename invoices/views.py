from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    # return HttpResponse("Hello World, You are at a Home Page ...")
    return render(request,'index.html'),

def about

def about(request):
    return HttpResponse("This is a About Page...")

def contact(request):
    return HttpResponse("Contact Us - 945XXXXXX - For More")