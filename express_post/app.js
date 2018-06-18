const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

var friends = ["Tony", "Katy", "Chris", "William"];

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/friends", function (req, res) {
    // let friends = ["Tony", "Katy", "Chris", "William"]
    res.render("friends", {
        friends: friends
    });
});

app.post("/addfriend", function (req, res) {
    let newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.listen("8080", function () {
    console.log("Server up on 8080");
});