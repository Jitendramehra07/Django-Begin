from django.urls import path
from . import views

urlpatterns=[
    path('',views.all_Project,name='all_Project'),
    # path('order/',views.order,name="order"),
]