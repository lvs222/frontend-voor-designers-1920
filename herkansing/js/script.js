//hier maak ik de variabelen aan die ik in de functies ga gebruiken 
var header = document.querySelector('header');
var section = document.querySelector('section');
var selectAll = document.getElementById('selectAll');
var count = 0;

//variabelen voor de button show hightlights. 
var footballButton = document.getElementById('footballButton');
//als je op de button klikt wordt de functie showHighlights geactiveerd
footballButton.addEventListener('click', showHighlights);

//de functie om de json data te laten zien als er op de button wordt geklikt
function showHighlights (jsonObj){
    
//variabele met de url naar de json data, link met json data wordt hier gemaakt // 
var requestURL = "https://www.scorebat.com/video-api/v1/";

//een xmlhttp request object aanmaken, nu kun je externe data laden. haalt de data op en herlaadt de data 
var request = new XMLHttpRequest();

//koppel de json url aan de xtmhttp request 
request.open('GET', requestURL);

//de data die terug komt is van het type json 
request.responseType = 'json';

//hier wordt het verstuurd
request.send();

//onload event listener van het xtmhttp request ding, kan ook .onerror zijn of iets anders
request.onload = function () {
    var photos = request.response;

    // functies worden aangeroepen en de json data wordt er aan meegegeven 
    showPhotos(photos);
}

}

//met deze functie maak ik alle elementen aan en koppel ik die aan de data van de json
function showPhotos(jsonObj) {
    console.log("function showPhotos", jsonObj);

    for (let i = 0; i < 10; i++) {

        //html elementen aanmaken
        var myArticle = document.createElement('article');        
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var afbeelding = document.createElement('img');
        
        myH2.textContent = jsonObj[i].title;

        afbeelding.src = jsonObj[i].thumbnail;

        myPara1.textContent = jsonObj[i].competition.name;

        //html elementen genest
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(afbeelding);

        //nieuwe elementen aan de section in de html toegevoegt// 

        selectAll.appendChild(myArticle);

    }

}


// werking van de carousel 

// variabelen aanmaken voor de  terug en verder button, gekoppeld aan de id's in de html 
var buttonTerug = document.querySelector('#terugButton');
var buttonVerder = document.querySelector('#verderButton');

// Wanneer je op de buttons klikt

// event listeners toevoegen aan de terug en verder buttons
buttonTerug.addEventListener('click', navigatieTerug);
buttonVerder.addEventListener('click', navigatieVerder);

// functie voor wat er gebeurt als je op de terugButton klikt
function navigatieTerug() {
    //hier zorg ik ervoor dat de functie de div in de html pakt die alle articles met highlights bevat
    var footballCarousel = document.getElementById('selectAll');

    count += 275;
    // section met img transformeert elke keer +275 px
    footballCarousel.style.transform = `translateX(${count}px)`;
}

// functie voor wat er gebeurt als je op de verderButton klikt
function navigatieVerder() {
    
        var footballCarousel = document.getElementById('selectAll');

    count -= 275;
    // section met img transformeert elke keer -275 px
    footballCarousel.style.transform = `translateX(${count}px)`;
}


//Keypress navigatie
document.addEventListener('keydown', pressTerug);
document.addEventListener('keydown', pressVerder);

// functie aanmaken voor wat er gebeurt als je op de > knop op je toetsenbord drukt
function pressTerug() {
    
            var footballCarousel = document.getElementById('selectAll');

    if (event.keyCode == 39) {
        count -= 275;
        // section met img transformeert elke keer +275 px
        footballCarousel.style.transform = `translateX(${count}px)`;
    }
}

// functie aanmaken voor wat er gebeurt als je op de < knop op je toetsenbord drukt
function pressVerder() {
    
            var footballCarousel = document.getElementById('selectAll');

    if (event.keyCode == 37) {
        count += 275;
        // section met transformeert elke keer +275 px
        footballCarousel.style.transform = `translateX(${count}px)`;
    }
}

