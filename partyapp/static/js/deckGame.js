var numOfCards=52;
cards = {
    "clubs": ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    "diamonds": ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    "hearts": ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    "spades": ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
}

conseq = {
    "A": "Waterfall",
    "2": "is Choose",
    "3": "is Me",
    "4": "is She",
    "5": "Thumb Master",
    "6": "is He",
    "7": "is Heaven",
    "8": "is Mate",
    "9": "Rhyme",
    "10": "Categories",
    "J": "Make a Rule",
    "Q": "Questions",
    "K": "Pour!"
}

function pickACard(){

    var curr_suite;
    var curr_num;
    
    var avail_suites = Object.keys(cards);

    if (avail_suites.length === 0 && cards.constructor === Object) {openModal(); return;}

    else {
        curr_suite = Object.keys(cards)[Math.floor((Math.random() * avail_suites.length))];
        var curr_cards = cards[curr_suite];

        curr_num = curr_cards[Math.floor((Math.random() * curr_cards.length))];

        const index = curr_cards.indexOf(curr_num);
        if (index > -1) {
            curr_cards.splice(index, 1);
        }
        cards[curr_suite] = curr_cards;

        if (curr_cards.length === 0) {
            delete cards[curr_suite];
        }

        console.log(cards);
    }

    var card = document.createElement('div');
    card.setAttribute('class', 'card');

    var num_top = document.createElement('p');
    num_top.setAttribute('class', 'num-top');
    num_top.appendChild(document.createTextNode(curr_num));

    var num_bottom = document.createElement('p');
    num_bottom.setAttribute('class', 'num-bottom');
    num_bottom.appendChild(document.createTextNode(curr_num));

    var img = document.createElement('img');

    img.setAttribute('src', "/static/img/cards/" + curr_suite + ".svg");
    img.setAttribute('class', 'suite');

    card.appendChild(num_top);
    card.appendChild(img);
    card.appendChild(num_bottom);

//    img.setAttribute('id', 'fish-num-'+counter);
    var pokertable=document.querySelector('.poker-table');
    pokertable.appendChild(card);
    
    numOfCards--;
    document.querySelector('.fish-points').innerHTML="Cards Left: "+numOfCards;
//    var height= fishtank.offsetHeight-90;
//    var randomHeight=Math.floor((Math.random() * height) + 30);
//    var animationduration=Math.floor((Math.random() * 10) + 4);
//
//    var fish= document.querySelector('#fish-num-'+counter);
//
//
//    if (num>3){
//        fish.style.cssText="animation-name: swim-right; top: "+randomHeight+"px; animation-duration: "+animationduration+"s;";
//    }
//    else{
//        fish.style.cssText="animation-name: swim-left; top: "+randomHeight+"px; animation-duration: "+animationduration+"s;";
//    }
//
//
//    //when fish exits the screen
//    $('#fish-num-'+counter).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
//        var currentfish= document.querySelector('#fish-num-'+counter);
//        currentfish.style.cssText=`display: none`;
//     });
//
//    //when fish is clicked
//    $('#fish-num-'+counter).click(function(){
//        $('#fish-num-'+counter).toggle( "explode" );
//        points++;
//        document.querySelector('.fish-points').innerHTML="Points: "+points;
//        //var currentfish= document.querySelector('#fish-num-'+counter);
//        //currentfish.style.cssText=`display: none`;
//    });


}


function startGame(display, drawBtn, button, extra) {
    
    clearOld(button, extra);

    display.appendChild(drawBtn)


    // var counter=1;
    // var timer = duration, minutes, seconds;
    // var timerinterval=setInterval(function () {
    //     clearOld(button, extra);
    //     document.querySelector('.fish-points').innerHTML="Points: "+points;

    //     minutes = parseInt(timer / 60, 10);
    //     seconds = parseInt(timer % 60, 10);

    //     minutes = minutes < 10 ? "0" + minutes : minutes;
    //     seconds = seconds < 10 ? "0" + seconds : seconds;

    //     display.textContent = minutes + ":" + seconds;
    //     display.style.cssText="border: 2px solid var(--med-blue);";

    //     if (seconds=="00" && minutes=="00"){
    //         clearInterval(timerinterval);
    //         openModal();
    //     }

    //     if (--timer < 0) {
    //         timer = duration;
    //     }
    //     counter++;
    // }, 1000);

}

function clearOld(button, extra){
    button.style.cssText=`display: none`;
    extra.style.cssText=`display: none`;
    document.querySelector('.are-you-ready').style.cssText=`display: none`;
}

/*clicks*/
document.addEventListener('click', function (event) {
	// If the clicked element doesn't have the right selector, bail
    if (event.target.matches('.start')){
        let button= document.querySelector('.start');
        button.style.cssText=`
        background-color: white;
        color: var(--med-blue);
        border: 2px solid white;
        `

        let extra= document.querySelector('#inline-extra');
        extra.style.cssText=`
        display: block;
        `

        drawBtn = document.createElement('div')
        drawBtn.setAttribute('class', 'draw-a-card')
        drawBtn.appendChild(document.createTextNode("Draw a Card"));

        // wait for all players
        setTimeout(() => {startGame(document.querySelector('#time'), drawBtn, button, extra);}, 3000); //wait 3 sec for now!
    } 
    
    else if (event.target.matches('.draw-a-card')){
        pickACard();
    }

    else {
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
    document.querySelector('.collected-points').innerHTML="The deck is finished!"
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