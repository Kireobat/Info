# IT Utvikling

## Lenker:
- [Hefte](https://indd.adobe.com/view/38062418-9d87-4b6e-b4fb-c907cd10f942)
- [Utganspunkt Express Applikasjon](https://github.com/boggarp/Express-Handlebars---Utganspunkt-v2)
- [Tips til hvordan snakke med ChatGP](https://github.com/Kireobat/Info/tree/main/Utvikling/Handlebars%20%26%20Express/Web-Applikasjoner%20-%20Klient%20og%20Server/Leksjon%2017%20-%20%C3%85%20snakke%20med%20chatGPT)
- [Deployment til Azure](https://github.com/Kireobat/Info/tree/main/Utvikling/Handlebars%20%26%20Express/Web-Applikasjoner%20-%20Klient%20og%20Server/Leksjon%2014%20-%20Azure%20Deployment)
- [Alt om Svelte/Sveltekit](https://github.com/Kireobat/Info/tree/main/Utvikling/Svelte)



## Leksjoner
- [Grunnlegende koding](https://github.com/Kireobat/Info/tree/main/Utvikling/Grunnlegende%20Koding)
- [HTML og CSS](https://github.com/Kireobat/Info/tree/main/Utvikling/HTML%20og%20CSS)
- [Javascript på klienten](https://github.com/Kireobat/Info/tree/main/Utvikling/Javascript%20p%C3%A5%20klienten)
- [Web-Applikasjoner - Klient og Server](https://github.com/Kireobat/Info/tree/main/Utvikling/Handlebars%20%26%20Express/Web-Applikasjoner%20-%20Klient%20og%20Server)

# CheatSheet
- [npm](#npm)
- [yarn](#yarn)
- [better-sqlite3](#better-sqlite3)
- [Express-session](#express-session)
- [Express Routes](#express-routes)
- [bcrypt](#bcrypt)
- [Javascript på klienten](#javascript-på-klienten)




---

## npm

npm forklaring

``` 
//Opprette nødvendige konfigurasjonsfiler ved oppstart nytt prosjekt  
npm init -y 

//Installere Express, Handlebars og better-sqlite3 
npm install express, hbs, better-sqlite3

//Installere nodemon globalt
npm install nodemon -g  

//Autorestarter app.js ved filendringer på filtypen js og hbs
nodemon app.js -e js,hbs 

//Installerer alle pakkene som hører til et prosjekt
npm install 
```
---
## yarn

yarn forklaring

``` 
//Opprette nødvendige konfigurasjonsfiler ved oppstart nytt prosjekt  
yarn init 

//Installere Express, Handlebars og better-sqlite3 
yarn install express, hbs, better-sqlite3

//Installere nodemon globalt
yarn install nodemon -g  

//Autorestarter app.js ved filendringer på filtypen js og hbs
nodemon app.js -e js,hbs 

//Installerer alle pakkene som hører til et prosjekt
yarn
```
---
## better-sqlite3

```
// All
const sql = db.prepare('SELECT * FROM names')
const rows = sql.all()
```
```
// One Specific
const sql = db.prepare('SELECT * FROM names WHERE id = (?)')
const result = sql.get(1) 
```
```
// Insert
const sql = db.prepare('INSERT INTO names (first,last) VALUES (?,?)');
const info = sql.run("Birger","Hansen")
```
```
// Delete
const sql = db.prepare("DELETE FROM names WHERE id=(?)");
const info = sql.run("7")
```
```
// Update
const sql = db.prepare(`
	UPDATE names 
	SET name=(?) 
	WHERE id=(?)`);
const info = sql.run("Spiderman",8)
```
```
// Inner Join
    SELECT * 
    FROM person 
    INNER JOIN poststed
    ON person.postnummer = poststed.postnummer 
    WHERE person_id=(?)

```
---

## Express-session

### Oppsett
```
app.use(session( {
    secret: "Lang_tekst_som_skal_være_hemmelig",
    resave: false,
    saveUninitialized : false
}))
```
### Objektvariabler kan lagres i request.session
```
request.session.username = username
request.session.logedIn = true
request.session.shoppingcart = []
```
---

## Express-Routes

### DENNE LINJEN ER SUPER VIKTIG

`app.use(express.urlencoded({extended: true}))`

### post request kan ta inn data og bruke den i en funksjon

```
app.post("/api/login", (req, res) => {
  login(req, res);
});
```

### get requests henter bare data

```
app.get("/api/requests", (req, res) => {
  getRequests(req, res);
});
```

---
## bcrypt

### Lage hash av passordet "qwerty", saltrounds satt til 10
```
const hash = bcrypt.hashSync("qwerty", 10);
```
### Sjekke om passordet "QwertY" samsvarer med hashen gitt QwertY blir hashet, viss hashen er lik returneres true, ellers false
```
const isCorrect = bcrypt.compareSync(password2, hash);
```
---
## Javascript på klienten

### Endring av DOM, og koble kode til klikk

#### index.html:
```
<div id="minDiv> Eksempeltekst </div>

<button id="button">Klikk her</button>
```
#### clientApp.js:
```
// Henter en diven med id="minDiv" og lagrer denne i en variabel.
const minDiv = document.getElementById("minDiv")

// Setter teksten inni minDiv til "Ny tekst"
minDiv.innerText = "Ny tekst"

// Setter en p-tag inni diven
minDiv.innerHTML = "<p> Nytt avsnitt </p>"

//Endrer css-egenskaper til et element
minDiv.style.color = "red"

// Legger til en funksjon som kjører ved klikk på knappen
let button = document.getElementById("button")
button.addEventListener("click", function () {
   alert("Du trykket på knappen")
}
```

### Sending av data som query string til server
```
let value=23 //Verdi som skal sendes
let result = await fetch("/search?value="+value, {method:'get'})
let resultData = await result.json()
if(result.ok) {
        console.log("Result OK")
    } else {
        console.log("Result NOT OK")
    }
```
[Mer detaljer](https://github.com/Kireobat/Info/tree/main/Utvikling/Handlebars%20%26%20Express/Web-Applikasjoner%20-%20Klient%20og%20Server/Leksjon%2016%20-%20S%C3%B8k%20Funksjonalitet)



### Sending av skjemadata til server
```
let form = document.getElementById("registerForm")
let result = await fetch(form.action, {method:'post', body: new URLSearchParams(new FormData(form))})
let resultData = await result.json()
if(result.ok) {
    console.log("Result OK")
} else {
    console.log("Result NOT OK")
}
```
[Mer detaljer](https://github.com/Kireobat/Info/tree/main/Utvikling/Handlebars%20%26%20Express/Web-Applikasjoner%20-%20Klient%20og%20Server/Leksjon%2013%20-%20Post%20med%20Fetch)


### Motta data fra server
```
///Console logger data fra /getData
async function updateData() {
  let response  = await fetch("/getData") //Åpner adressen /getData og henter resultatet
  let data  = await response.json() //Konverterer fra json til objekt/array
  console.log(data)
}
```
[Mer detaljer](https://github.com/Kireobat/Info/tree/main/Utvikling/Handlebars%20%26%20Express/Web-Applikasjoner%20-%20Klient%20og%20Server/Leksjon%2008%20-%20Client%20Side%20Rendering)
