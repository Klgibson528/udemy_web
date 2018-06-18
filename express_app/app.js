var express = require('express');
var app = express()

app.get("/", function (req, res) {
    res.send("Welcome to my assignment")
});

app.get("/speak/:animal", function (req, res) {
    var animal = req.params.animal;
    if (animal === "pig") {
        res.send("oink")
    } else if (animal === "cow") {
        res.send("moo")
    } else {
        res.send("woof woof")
    }
});

app.get("/repeat/:message/:num", function (req, res) {
    var message = req.params.message;
    var num = Number(req.params.num);
    var str = "";
    for (var i = 0; i < num; i++) {
        str += " " + message;
    }
    res.send(str);

});

app.get("*", function (req, res) {
    res.send("Sorry, page not found")
})

app.listen("8080", function () {
    console.log("Server on 8080")
})