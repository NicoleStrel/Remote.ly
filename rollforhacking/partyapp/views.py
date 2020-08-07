from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

# Create your views here.
def index(request):

    return render(request, "partyapp/index.html", {
        "page_title": "Party",
        "description": "Play games with your friends, wherever you are!"
    })

def fishgame(request):

    return render(request, "partyapp/games/fishgame.html", {
        "page_title": "Fish Game",
        "description": "Catch the most Fish!",
    })
