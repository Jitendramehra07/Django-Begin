
from django.urls import path,include
from . import views

#local host:8000/project
#local host:8000/project/order
urlpatterns = [
    path('',views.all_Project,name="all_Project"),
    #path('order/',views.order,name="order"),

]