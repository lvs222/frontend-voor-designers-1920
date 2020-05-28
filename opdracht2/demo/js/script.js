
// variabelen voor de knop rechts // 
var buttonRechts = document.querySelector("button.buttontwee");
var naarLinks = document.querySelector("li.naarlinks");


//om de afbeelding te laten bewegen// 
buttonRechts.addEventListener("click", function() {
    naarLinks.classList.add("move");
});

document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        object.x -= 1;
    }
    //top
    else if(event.keyCode == 38) {
        object.y -= 1;
    }
    //right
    else if(event.keyCode == 39) {
        object.x += 1;
    }
    //bottom
    else if(event.keyCode == 40) {
        object.y += 1;
    }
});