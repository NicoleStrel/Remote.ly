from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

# Create your views here.
def index(request):

    return render(request, "partyapp/index.html", {
        "page_title": "Remote.ly",
        "description": "Play games with your friends, wherever you are!"
    })

def fishgame(request):

    return render(request, "partyapp/games/fishgame.html", {
        "page_title": "Catch The Fishies",
        "description": "Catch the most Fish!",
    })

def deckgame(request):

    return render(request, "partyapp/games/deckgame.html", {
        "page_title": "All Hands On Deck"
    })

# def signin(request):
#     return render(request, "partyapp/signin.html", {
#         "page_title": "Remote.ly - Sign In",
#         "description": "Sign In to your account!",
#     })

# def signup(request):
#     return render(request, "partyapp/signup.html", {
#         "page_title": "Remote.ly - Sign Up",
#         "description": "Make an account with Remote.ly!",
#     })

def avatar(request):
    return render(request, "partyapp/avatar.html", {
        "page_title": "Remote.ly - Sign Up - Avatar",
        "description": "Choose an avatar for your account!",
    })


def letsplay(request):
    return render(request, "partyapp/letsplay.html", {
        "page_title": "Remote.ly - Let's Play!",
        "description": "Are you ready to play fun games with your friends?",
    }) 
