// * შექმენით stopwatch (წამზომი), stop & reset ფუნქციებით, გასტილეთ css გამოყენებით.


const watch = document.getElementById("watch")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
let num = 0

function Start(){
    num ++
    watch.textContent = num
}
let interval = setInterval(Start , 1000)

start.addEventListener("click" , function () {
    interval
})

stop.addEventListener("click" , function () {
    clearInterval(interval)
})
