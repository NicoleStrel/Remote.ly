var pos;
var $demo;
var picid="avatar-1"; //default

function getLocation() {
    console.log("get loc")
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $demo.text("Geolocation is not supported by this browser.");
    }

   
}
function updateAv(num) {
    var idname="avatar-"+num;
    console.log(idname);
    //revert old:
    for (let i=1; i<9; i++){
        var name="avatar-"+i;
        document.getElementById(name).style.cssText="border: solid 1px black";
    }
    document.getElementById(idname).style.cssText="border: solid 1px white";
    
    picid=idname;
}

function showPosition(position) {
    pos = position;
    var { latitude, longitude } = pos.coords;
    $demo.html(`Latitude: ${latitude}, Longitude: ${longitude}`);
    $('#btn_submit').attr("disabled", null); //inable button
}

$(document).ready(function() {
    $demo = $("#demo");

    $('#btn_submit').on('click', function() {
        
        $.ajax(
            type='POST',
            url = "letsplay",
            data = {
                lat:pos.coords.latitude,
                long: pos.coords.longitude,
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
            },
        );
        console.log("submitted");
    });


    /*
    $('#btn_submit').on('click', function() {
        var data = pos.coords;
        data.csrfmiddlewaretoken = $('input[name=csrfmiddlewaretoken]').val();
        $.post("/ajax/", data, function() {
            alert("Saved Data!");
        });
    });*/
});  
/*
$(document).on('submit', '#btn_submit', function(e){
    console.log("ajax thing")
    e.preventDefault();
        $.ajax(
            type='POST',
            url = 'letsplay',
            data = {
                lat:pos.coords.latitude,
                long: pos.coords.longitude,
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
            },
        );
    }); */