# Bilde-opplastningssystem

Dette er et eksemepl på et meldingssystem, der en kan poste melding og bilde.

Meldingene, og bildefil-navnet lagres i en sqlite-database. Fil-opplastning er gjort med modulen multer

### [Multer](https://www.npmjs.com/package/multer)

---

Oppsett av multer er lagt inn i filen setup.js.
Filopplastninger havner i mappen public/uploads
HTML-skjema for posting av meldinger ligger i public/index.html
Handler for html-skjemaet ligger i app.js 
Klient-side rendering viser alle meldingene, koden for dette liger i public/js/clientApp.js




## Generell Info
Kjør følgende kommando for å få alle pakkene-du trenger:

`npm install`

eller

`yarn`


I setup.js står kode som kjøres i starten av de fleste express prosjekt

app.js er hovedprogrammet. Start app.js med kommandoen 

`node .\app.js`

---

Installer node herfra:

[Node](https://nodejs.org/en/)

Grafisk brukergrensesnitt til databasen (database.db):

[Sqlitestudio](https://sqlitestudio.pl/)

Data-base-plugin til Visual Studio:

[VSCode-SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)
