from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("Hello World, You are at A Home Page...")
    return render(request,'index.html')


def about(request):
    return render(request,'index.html')

def contact(request):
    return render(request,'index.html')