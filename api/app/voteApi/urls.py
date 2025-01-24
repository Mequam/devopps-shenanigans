"""
URL configuration for voteApi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from vote_api.views import get_quiz,vote,create_quiz,list_quizes

urlpatterns = [
    #path('admin/', admin.site.urls), uncomment for default admin :D
    path('quiz/create',create_quiz),
    path('quiz/all',list_quizes),
    path('quiz/<quiz_id>',get_quiz),
    path('vote',vote)

]
