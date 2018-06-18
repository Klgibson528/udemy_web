var express = require("express");
//this is where you are telling the app to execute express and save it to a variable
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there!")
});

app.get("/bye", function (req, res) {
    res.send("Bye!")
});

app.get("/dog", function (req, res) {
    res.send("DOG!")
});

//Creating patterns
// : goes infront of anything that would be a variable
app.get("/r/:subRedditName", function (req, res) {
    res.send("This is a subreddit!")
});

//handles any routes that are not defined in app, always goes on bottom
app.get("*", function (req, res) {
    res.send("Where do you think you're going?")
})

app.listen(8008, function () {
    console.log("Listening on port 8008");
});