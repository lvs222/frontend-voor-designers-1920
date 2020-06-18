//hier maak ik de variabelen aan die ik in de functies ga gebruiken.
var header = document.querySelector('header');
var section = document.querySelector('section');
var buttonVideo = document.getElementById("buttonvideo");
var buttonPhoto = document.getElementById("buttonphoto");
var showVideo = document.querySelector("div.videoelement");
var hidePhoto = document.querySelector(".photo");


//dit zijn de functies waarmee ik de tekst op de button laat veranderen, en waar ik de video en foto wel/niet laat zien. Dit gebeurt met een toggle
buttonVideo.addEventListener("click", function () {

    buttonVideo.classList.toggle("remove");

});

buttonPhoto.addEventListener("click", function () {
    showVideo.classList.toggle("showvideo");

    hidePhoto.classList.toggle("hidephoto");

    buttonPhoto.classList.toggle("remove");
});

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




        //html elementen genest
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(afbeelding);

        //nieuwe elementen aan de section in de html toegevoegt// 

        section.appendChild(myArticle);
    }
}
