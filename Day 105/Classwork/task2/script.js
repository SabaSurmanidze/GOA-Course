// bonus:
// შექმენით საიტი, სადაც გქნებათ ფოტო და ღილაკი, ამ ღილაკზე დაჭერისას ფოტო ყოველ 5 წამში უნდა გადიდდეს 2-ჯერ.

const img = document.querySelector("img")
const btn = document.querySelector("button")


function expand() {
    img.style.width = "200px"
}
btn.addEventListener("click" , function() {
    setInterval(expand , 5000)
})