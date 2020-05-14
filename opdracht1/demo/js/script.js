
//dit zijn de variabelen voor het maken van favorieten //

var buttonIronMan = document.querySelector("button.ironman");
var favoIronMan = document.querySelector("li.ironmanfavo");

var buttonTheProposal = document.querySelector("button.theproposal");
var favoTheProposal = document.querySelector("li.theproposalfavo");

var buttonMamaMia = document.querySelector("button.mamamia");
var favoMamaMia = document.querySelector("li.mamamiafavo");

var buttonCaptainAmerica = document.querySelector("button.captainamerica");
var favoCaptainAmerica = document.querySelector("li.captainamericafavo");

//dit zijn de variabelen voor het niet-favorieten//

var buttonIronManniet = document.querySelector("button.ironmangeen");
var unfavoIronMan = document.querySelector("li.ironmanfavo");

var buttonTheProposalniet = document.querySelector("button.theproposalgeen");
var unfavoTheProposal = document.querySelector("li.theproposalfavo");

var buttonMamaMianiet = document.querySelector("button.mamamiageen");
var unfavoMamaMia = document.querySelector("li.mamamiafavo");

var buttonCaptainAmericaniet = document.querySelector("button.captainamericageen");
var unfavoCaptainAmerica = document.querySelector("li.captainamericafavo");

//dit zijn de acties voor het maken van een favoriet, als je op de button van de films klikt die al te zien zijn, 
// dan zorgt de class .yay ervoor dat de film in het onderste lijstje zichtbaar wordt.  //


buttonIronMan.addEventListener("click", function() {
    favoIronMan.classList.toggle("yay");
    
});

buttonTheProposal.addEventListener("click", function() {
    favoTheProposal.classList.toggle("yay");
});


buttonMamaMia.addEventListener("click", function() {
    favoMamaMia.classList.toggle("yay");
});

buttonCaptainAmerica.addEventListener("click", function() {
    favoCaptainAmerica.classList.toggle("yay");
});


//dit zijn de acties voor het niet meer favoriet maken, als je op de button van de favoriete film klikt, 
// dan zorgt de class .yay ervoor dat de film niet meer zichtbaar wordt. //

buttonIronManniet.addEventListener("click", function() {
    unfavoIronMan.classList.toggle("yay");
    
});

buttonTheProposalniet.addEventListener("click", function() {
    unfavoTheProposal.classList.toggle("yay");
    
});

buttonMamaMianiet.addEventListener("click", function() {
    unfavoMamaMia.classList.toggle("yay");
    
});

buttonCaptainAmericaniet.addEventListener("click", function() {
    unfavoCaptainAmerica.classList.toggle("yay");
    
});

