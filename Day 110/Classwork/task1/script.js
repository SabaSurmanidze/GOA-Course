// 1. შექმენით ბურთის ფერის შეცვლის ანიმაცია, რომელსაც გამოიძახებთ ყოველ 5 წამში.


const ball = document.querySelector(".ball")


function color() {
    ball.style.color = "green"
}

setInterval(color , 5000)