const fs = require('fs')
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const session = require('express-session')

//Starter opp express, og skrur på public-mappen
const app = express()
const publicDirectoryPath = path.join(__dirname, "/public")
app.use(express.static(publicDirectoryPath))

//Bruker urlencoded-middleware, for å la oss få tilgang til request.body i post-forms
app.use(express.urlencoded({ extended: true }));

//Bruker express-session til å lagre informasjon på server om besøkende
//som for eksempel-login-state
app.use(session( {
    secret: "Keep it secret",
    resave: false,
    saveUninitialized : false
}))

//Legger til Handlebars for å få til Server Side Rendering
const viewPath = path.join(__dirname, "/views/pages")
const partialsPath = path.join(__dirname, "/views/partials")
app.set("view engine", hbs)
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db', {verbose:console.log})




exports.app = app
exports.db = db
exports.session = session