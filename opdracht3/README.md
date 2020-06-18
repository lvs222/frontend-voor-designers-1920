# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Mijn project bestaat uit voetbalfoto's van recente wedstrijden. Als je op de button klikt verschijnt er een video met de highlights van de wedstrijd en kun je de video afspelen. 

link: https://lvs222.github.io/frontend-voor-designers-1920/opdracht3/demo/index.html

## interface
Als je de website betreed zie je een thumbnail van een voetbalwedstrijd. De button spreekt voor zich : "Show video". Door op de button te klikken verdwijnt de thumbnail en komt daarvoor in de plaats de video van de wedstrijd. Wil je de video weer verwijderen? Dan klik je op Show Photo. 

In de demo heb je interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

04: de user is altijd in control omdat hij/zij er door de buttons te gebruiken voor kan kiezen om de video wel of niet te zien
08: na het bekijken van de thumbnail en de tekst van de wedstrijd kan de gebruiken de volgende stap nemen door op de button show video te klikken. Nu komt een video in beeld. Deze video spreekt voor zich en kan makkelijk worden afgespeeld. 
09: de buttons zien er van nature clickable uit en de tekst vertelt wat de bedoeling is 
11: ik heb gewerkt met verschillende tekstgroottes om de hierarchie aan te duiden. 

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?

Ik heb gebruik gemaakt van een button die klikbaar is en een video element laat zien of juist weghaalt. Hetzelfde geldt voor de thumbnail.

IN de demo heb je een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) toegepast. Hoe heb je dat gedaan?

Ik heb de ideal state gemaakt.


## code
Bij de code staan comments geschreven. 