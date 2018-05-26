//takes a string argument and returns the one element with that ID
//actually gets an object
var tag = document.getElementById("highlight");

//takes a string argument and returns any element with that class
// returns a node list containing objects, similar to an array but with less functionality
var tags = document.getElementsByClassName("bolded");

//takes a string argument and returns any element with that tag
// returns a node list containing objects 
var body = document.getElementsByTagName("body")[0];

// have to use # or appropriate idenifier 
//only returns first element
// by id
var highlight = document.querySelector("#highlight");
// by class
var bold = document.querySelector(".bolded");
//by selector
var h1 = document.querySelector("h1");
//nested selectors and class
var li = document.querySelector("li a.special");

//will return ALL
var lis = document.querySelectorAll("li");

//Manipulating DOM
tag.classList.add("big"); //adds class
tag.classList.add("big"); //removes class
tag.classList.toggle("big"); //if it has the class it removes, if it does not it adds
tag.textContent //grabs all the text and returns a string, removes html elements

document.body.innerHTML("Good Job!") // will change the content of the body on page

var img1 = document.getElementsByTagName("img")[0]
img1.getAttribute("src") //gives src link
img1.setAttribute("src", "https://images.pexels.com/photos/41202/adorable-baby-bath-blanket-41202.jpeg");
//takes 2 args (att, link), will change src link

//to change href
var a = document.getElementsByTagName('a')[0];
a.setAttribute("href", "http://www.google.com") //make sure you have http or else it's a relative path

//Event listeners
//You can have multiple on one element
//Code below will create alert then change color
var ul = document.querySelector("ul");
ul.addEventListener("click", function () {
    alert("Hello!")
});

ul.addEventListener("click", function () {
    ul.style.color = "pink";
});

//changes individual li color
//this refers to the element given under for loop
lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        this.style.color = "green"
    });
}

//toggles background color between purple and white
var but = document.querySelector("button");
var isPurple = false;
but.addEventListener("click", function () {
    if (isPurple) {
        document.body.style.background = "white"
    } else {
        document.body.style.background = "purple"
    }
    isPurple = !isPurple; //toggles between true and false
});

// better way using toggle
but.addEventListener("click", function () {
    document.body.classList.toggle("purple");
});