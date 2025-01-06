from django.shortcuts import render
from django.http import HttpResponse,Http404
from django.views.decorators.csrf import csrf_exempt
from .models import Quiz

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
        data = request.POST
        quiz_id = data.get("quiz_id")
        option = data.get("option")

        print(quiz_id)
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
