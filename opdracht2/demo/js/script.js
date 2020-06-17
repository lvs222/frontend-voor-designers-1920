
// variabelen voor de knop rechts // 
var buttonRechts = document.querySelector("button.buttontwee");
var naarLinks = document.querySelector("li.naarlinks");


//om de afbeelding te laten bewegen// 
buttonRechts.addEventListener("click", function() {
    naarLinks.classList.add("move");
});


