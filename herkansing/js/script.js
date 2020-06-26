//hier maak ik de variabelen aan die ik in de functies ga gebruiken.
var header = document.querySelector('header');
var section = document.querySelector('section');
var count = 0;



//het volgende stuk gaat over de json data 
//variabele met de url naar de json data // 
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

function showPhotos(jsonObj) {
        console.log("function showPhotos", jsonObj);

  
    for (let i = 0; i < 10; i++) {

        //html elementen aanmaken
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var afbeelding = document.createElement('img');
//        var video = document.createElement('video');
        


        myH2.textContent = jsonObj[i].title;


        afbeelding.src = jsonObj[i].thumbnail;

        myPara1.textContent = jsonObj[i].competition.name;
        
//        video.src = jsonObj[i].videos.embed;



        //html elementen genest
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(afbeelding);
//        myArticle.appendChild(video);
        
        

        //nieuwe elementen aan de section in de html toegevoegt// 

        section.appendChild(myArticle);
        
    }


}


// werking van de carousel 

// variabelen voor de  terug en verder button 
var buttonTerug = document.querySelector('#terugButton');
var buttonVerder = document.querySelector('#verderButton');

// variabele voor de section waar de thumbnails inzitten
var footballCarousel = document.querySelector('section');

// Buttons onclick

// event listeners toevoegen aan de terug en verder buttons
buttonTerug.addEventListener('click', navigatieTerug);
buttonVerder.addEventListener('click', navigatieVerder);

// functie voor wat er gebeurt als je op de terugButton klikt
function navigatieTerug() {
    count += 300;
    // section met img transformeert elke keer +300 px
    footballCarousel.style.transform = `translateX(${count}px)`;
}

// functie voor wat er gebeurt als je op de verderButton klikt
function navigatieVerder() {
    count -= 300;
    // section met img transformeert elke keer -300 px
    footballCarousel.style.transform = `translateX(${count}px)`;
}


//Keypress navigatie
document.addEventListener('keydown', pressTerug);
document.addEventListener('keydown', pressVerder);

// functie aanmaken voor wat er gebeurt als je op de > knop op je toetsenbord drukt
function pressTerug() {
    if (event.keyCode == 39) {
        count -= 300;
        // section met img transformeert elke keer +300 px
        footballCarousel.style.transform = `translateX(${count}px)`;
    }
}

// functie aanmaken voor wat er gebeurt als je op de < knop op je toetsenbord drukt
function pressVerder() {
    if (event.keyCode == 37) {
        count += 300;
        // section met transformeert elke keer +300 px
        footballCarousel.style.transform = `translateX(${count}px)`;
    }
}


