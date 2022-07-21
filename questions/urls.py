from django.urls import path
from .views import *

urlpatterns = [
    path('',questions , name="questions"),
    path('api/get_quiz/' , get_quiz, name= "get_quiz"),
    path('quiz/', quiz , name="quiz")
]
