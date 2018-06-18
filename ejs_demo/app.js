var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs")
app.get("/", function (req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:dogs", function (req, res) {
    var dogs = req.params.dogs;
    res.render('love', {
        thing: dogs
    });
});

app.get("fallinlovewith/:cats", function (req, res) {
    var cats = req.params.cats;
    res.render("home");
});

app.get("/posts", function (req, res) {
    var posts = [{
            title: "hi",
            author: "me"
        },
        {
            title: "bye",
            author: "chris"
        },
        {
            title: "no",
            author: "william"
        },
        {
            title: "yes",
            author: "william"
        }
    ];
    res.render('posts', {
        posts: posts
    })
});

app.listen("8080", function () {
    console.log("Server up on 8080");
});