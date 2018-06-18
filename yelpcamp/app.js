const ejs = require("ejs");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

var campgrounds = [{
        name: "Salmon Creek",
        image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439df3c37da3eab7_340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"
    },
    {
        name: "Salmon Creek",
        image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439df3c37da3eab7_340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"
    },
    {
        name: "Salmon Creek",
        image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439df3c37da3eab7_340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"
    }
]

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    res.render("landing")
})

app.get("/campgrounds", function (req, res) {

    res.render("campgrounds", {
        campgrounds: campgrounds
    })
})

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new")
})

app.listen("8000", function () {
    console.log('Listening on 8000')
})