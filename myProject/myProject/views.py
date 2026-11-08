from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("Hello World, You are at A Home Page...")
    return render(request,'index.html')


def about(request):
    return HttpResponse("Hello, You are at A About Page...")

def contact(request):
    return HttpResponse("Contact Us, 9686xxxxxx...")