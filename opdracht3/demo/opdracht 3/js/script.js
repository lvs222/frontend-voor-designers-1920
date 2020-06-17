var header = document.querySelector('header');
var section = document.querySelector('section');

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
    
//    console.log(movies);
    showPhotos(photos);
}

function showPhotos(jsonObj) {
//    const heroes = jsonObj['members'];
    console.log("function showPhotos",jsonObj);

    
    for (let i = 0; i < jsonObj.length; i++) {

        //html elementen aanmaken
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var afbeelding = document.createElement('img');
        
        myH2.textContent = jsonObj[i].title;
        
        afbeelding.src = jsonObj[i].thumbnail;
        
        myPara1.textContent = jsonObj[i].competition.name;
//        myPara2.textContent = jsonObj[i].side2.name;
//        


        //html elementen genest
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(afbeelding);



        //nieuwe elementen aan de section in de html toegevoegt// 

        section.appendChild(myArticle);
    }
}


console.log("hallo");


document.getElementById("next").addEventListener("click", function () {
    photoSlide(1)
});

document.getElementById("previous").addEventListener("click", function () {
    photoSlide(-1)
});

var slideIndex = 1;
photo(slideIndex);

function photoSlide(n) {
    photo(slideIndex += n);
}

function currentPhoto(n) {
    photo(slideIndex = n);
}

function photo(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        photoSlide(-1)
    } else if (e.keyCode == '39') {

        photoSlide(1)
    }
}


