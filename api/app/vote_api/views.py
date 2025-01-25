from django.shortcuts import render
from django.http import HttpResponse,Http404
from django.views.decorators.csrf import csrf_exempt
from .models import Quiz
from .models import Option
import json

# Create your views here.
def get_quiz(request,quiz_id)->HttpResponse:
    try:
        q = Quiz.objects.get(id=quiz_id)
    except:
        resp = HttpResponse(f"quiz {quiz_id} not found")
        resp.status_code = 404
        return resp

    return HttpResponse(q.to_json())

@csrf_exempt
def vote(request)->HttpResponse:
    if request.method == "POST":

        quiz_id = None
        option = None


        if request.META.get("CONTENT_TYPE") == 'application/json':
            data = json.loads(request.body)
            quiz_id = data["quiz_id"]
            option = data["option"]
        else:
            quiz_id = data.get("quiz_id")
            option = data.get("option")


        q = None
        try:
            q = Quiz.objects.get(id=quiz_id)
        except:
            resp = HttpResponse(f"quiz {quiz_id} not found")
            resp.status_code = 404
            return resp

        q.vote(option)

        return HttpResponse("vote counted")

@csrf_exempt
def get_winning_option(request,vote_id)->HttpResponse:
    try:
        q = Quiz.objects.get(id=quiz_id)
    except:
        resp = HttpResponse(f"quiz {quiz_id} not found")
        resp.status_code = 404
        return resp

    return HttpResponse({ "winner" : q.get_winner(self) })

@csrf_exempt
def create_quiz(request)->HttpResponse:

    if request.META.get("CONTENT_TYPE") != 'application/json':
        ret_val = HttpResponse("content type must be json")
        ret_val.status_code = 500
        return ret_val
    
    data = json.loads(request.body)

    q1 = Quiz(description=data["description"],name=data["name"])
    q1.save()

    options = [Option(description=option,amount=0,quiz=q1) 
                for option in data["options"]]

    for option in options:
        option.save()



    return HttpResponse(json.dumps({"quiz_id": q1.id}))

@csrf_exempt
def list_quizes(request)->HttpResponse:
    """give a quick overview of all quizes in the system"""
    return HttpResponse(
            json.dumps(
                [ {"name":quiz.name,"id":quiz.id} for quiz in Quiz.objects.all()]
                )
            )
