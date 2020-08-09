var points=0;

function generateAFIsh( counter){

    var num=Math.floor((Math.random() * 6) + 1);
    var img=document.createElement('img');
    
    //var imgsrc=baseURL+'fish-game-'+num+'.svg" %}';
    img.setAttribute('src', document.querySelector('#fish-'+num).getAttribute('src'));
    img.setAttribute('class', 'fish');
    img.setAttribute('id', 'fish-num-'+counter);
    var fishtank=document.querySelector('.fish-tank');
    fishtank.appendChild(img);
    var height= fishtank.offsetHeight-90;
    var randomHeight=Math.floor((Math.random() * height) + 30);
    var animationduration=Math.floor((Math.random() * 10) + 4);

    var fish= document.querySelector('#fish-num-'+counter);
    
    
    if (num>3){
        fish.style.cssText="animation-name: swim-right; top: "+randomHeight+"px; animation-duration: "+animationduration+"s;";
    }
    else{
        fish.style.cssText="animation-name: swim-left; top: "+randomHeight+"px; animation-duration: "+animationduration+"s;";
    }


    //when fish exits the screen
    $('#fish-num-'+counter).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
        var currentfish= document.querySelector('#fish-num-'+counter);
        currentfish.style.cssText=`display: none`;
     });

    //when fish is clicked
    $('#fish-num-'+counter).click(function(){
        $('#fish-num-'+counter).toggle( "explode" );
        points++;
        document.querySelector('.fish-points').innerHTML="Points: "+points;
        //var currentfish= document.querySelector('#fish-num-'+counter);
        //currentfish.style.cssText=`display: none`;
    });
    

}


function startTimer(duration, display, button, extra) {
    var counter=1;
    var timer = duration, minutes, seconds;
    var timerinterval=setInterval(function () {
        clearOld(button, extra);
        document.querySelector('.fish-points').innerHTML="Points: "+points;

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        display.style.cssText="border: 2px solid var(--med-blue);";

        if (seconds=="00" && minutes=="00"){
            clearInterval(timerinterval);
            openModal();
        }
        
        if (--timer < 0) {
            timer = duration;
        }
        generateAFIsh( counter)
        counter++;
    }, 1000);

}

function clearOld(button, extra){
    button.style.cssText=`display: none`;
    extra.style.cssText=`display: none`;
    document.querySelector('.are-you-ready').style.cssText=`display: none`;
}
/*clicks*/
document.addEventListener('click', function (event) {
	// If the clicked element doesn't have the right selector, bail
    if (event.target.matches('.ready-button')){
        let button= document.querySelector('.ready-button');
        button.style.cssText=`
        background-color: white;
        color: var(--med-blue);
        border: 2px solid white;
        `
        
        let extra= document.querySelector('#inline-extra');
        extra.style.cssText=`
        display: block;
        `

        // wait for all players
        setInterval(function () { }, 3000); //wait 3 sec for now!

        //start timer
        startTimer(30, document.querySelector('#time'),button, extra);
    }
    else{
        return;
    }

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	console.log(event.target);

}, false);


function openModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.querySelector('.collected-points').innerHTML="You collected "+points+" fish!"
}


/*
window.onload = function () {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}*/