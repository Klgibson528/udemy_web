const express = require('express'),
      body_parser = require('body-parser'),
      pgp = require("pg-promise")({}),
      passport = require('passport'),
      LocalStrategy = require('passport-local') 

const app = express();
const db = pgp({
  database: "auth",
  user: "postgres"
});

app.use(
    body_parser.urlencoded({
      extended: false
    })
  );
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render('home')
});

app.get("/secret", function (req, res) {
   res.render('secret')
});

app.get("", function (req, res) {

});

app.get("*", function (req, res) {
    
})

app.listen("8080", function () {
    console.log("Server on 8080")
})