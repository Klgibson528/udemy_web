const ejs = require("ejs");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    res.render("search")
})

app.get("/results", function (req, res) {
    //"search" comes from the name value in the <form>
    var query = req.query.search
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"
    //makes the call to the API
    request(url, function (error, response, body) {
        //included incase there is an error     
        if (!error && response.statusCode == 200) {
            //will turn the string of JSON into straight JSON data
            var data = JSON.parse(body);

            res.render('results', {
                data: data
            });
        } else {
            console.log(error)
        }
    });
})

app.listen("8000", function () {
    console.log("Listening on 8000")
})