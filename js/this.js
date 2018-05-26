// //namespace = comments
var comments = {};
comments.data = ["good job", "way to go", "you suck"];

// //without this
function print(arr) {
    arr.forEach(function (el) {
        console.log(el);
    });
}

print(comments.data);

//add to comments object
comments.print = function () {
    //this refers to object comments
    this.data.forEach(function (el) {
        console.log(el);
    });
}

comments.print()