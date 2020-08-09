from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from django.core import serializers
from .models import UserProfile
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
def cupgame(request):
    return render(request, "partyapp/games/ponggame.html", {
        "page_title": "Cup Pong"
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
    #users= UserProfile.objects.all()
    
    if request.method == 'POST':
        latitude = request.POST['lat']
        longitude = request.POST['long']
        UserProfile.create(
            user = request.user,
            lat= latitude,
            lng = longitude,
            points= 0,
        )
        console.log("created")

        
        json_serializer = serializers.get_serializer("json")()
        users = json_serializer.serialize(UserProfile.objects.all())
        users_html=UserProfile.objects.all()
        return render(request, "partyapp/map.html", {
        "users": users,
        "users_html": users_html,
        "page_title": "Remote.ly - Let's Play!",
        "description": "Are you ready to play fun games with your friends?",
        }) 

    # uncomment if you'd like to see the working one
    ''' 
        json_serializer = serializers.get_serializer("json")()
        users = json_serializer.serialize(UserProfile.objects.all())
        users_html=UserProfile.objects.all()
        return render(request, "partyapp/map.html", {
            "users": users,
            "users_html": users_html,
            "page_title": "Remote.ly - Let's Play!",
            "description": "Are you ready to play fun games with your friends?",
        }) 
    '''
        

def gamedash(request):
    json_serializer = serializers.get_serializer("json")()
    users = json_serializer.serialize(UserProfile.objects.all())
    users_html=UserProfile.objects.all()
    return render(request, "partyapp/map2.html", {
        "users": users,
        "users_html": users_html,
        "page_title": "Remote.ly - Games",
        "description": "Find a game and play it :)",
    }) 



#def save_user_geolocation_and_image(request):

   

   
