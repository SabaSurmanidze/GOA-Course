// 3. stopwatch - reset & stop ფუნქციონალით და კარგი დიზაინით.


const watch = document.getElementById("timer")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
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



reset.addEventListener("click" , function () {
    num = 0
    watch.textContent = num
})



