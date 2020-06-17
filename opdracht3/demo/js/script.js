
var header = document.querySelector('header');
var section = document.querySelector('section');

//variabele met de url naar de json data // 
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

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
    var movies = request.response;

    // functies worden aangeroepen en de json data wordt er aan meegegeven 
    
//    console.log(movies);
    showMovie(movies);
}


function showMovie(jsonObj) {
//    const heroes = jsonObj['members'];
    console.log("function showMovies",jsonObj);

    console.log(jsonObj[4].cover);
    for (let i = 0; i < jsonObj.length; i++) {

        //html elementen aanmaken
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        
        myH2.textContent = jsonObj[i].title;
        
        var plot = document.createElement('p');
        plot.textContent = jsonObj[i].plot;
        
        var plaatje = document.createElement('img');
        plaatje.src = jsonObj[i].cover;
        


        //html elementen genest
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(plot);
        myArticle.appendChild(plaatje);



        //nieuwe elementen aan de section in de html toegevoegt// 

        section.appendChild(myArticle);
    }
}
