// 4. timer - start ღილაკით და საწყისი დროის არჩევნის საშუალებით.
const timer = document.getElementById("timer")
const start = document.getElementById("start")
let num = 0
function start() {
    num ++
    timer.textContent = num
}

start.addEventListener("click" , function () {
    setInterval(start , 1000)
    
})