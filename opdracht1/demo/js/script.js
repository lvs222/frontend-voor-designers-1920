/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

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

//dit zijn de acties voor het maken van een favoriet//


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


//dit zijn de acties voor het niet meer favoriet maken//

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

