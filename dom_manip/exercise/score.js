var buttons = document.getElementsByTagName("button");
var but1 = document.getElementsByTagName("button")[0];
var but2 = document.getElementsByTagName("button")[1];
var but3 = document.getElementsByTagName("button")[2];
var p1 = document.getElementsByTagName("span")[0]
var p2 = document.getElementsByTagName("span")[1]
var max = document.getElementsByTagName("span")[2]
var input = document.querySelector("input")
var p1Score = 0;
var p2Score = 0;
var win = 0
var gameOver = false;

but1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === win) {
            p1.classList.add("green");
            gameOver = true
        }
        p1.textContent = p1Score;
    }
});

but2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === win) {
            p2.classList.add("green");
            gameOver = true
        }
        p2.textContent = p2Score;
    }
});

but3.addEventListener("click", function () {
    reset()
});


function reset() {
    p1Score = 0;
    p2Score = 0;
    p1.textContent = p1Score;
    p2.textContent = p2Score;
    p1.classList.remove("green");
    p2.classList.remove("green");
    gameOver = false;
}

input.addEventListener("change", function () {
    max.textContent = this.value;
    win = parseInt(this.value)
    reset()
})

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function () {
        this.classList.add("green");
    });
    buttons[i].addEventListener("mouseout", function () {
        this.classList.remove("green");
    });
}