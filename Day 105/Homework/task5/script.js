// 5. საიტი, სადაც იქნება ბომბის ფოტო, 10 წამიანი coundown, და როდესაც დრო 0 გახდება საიტის ფონი შეცვალეთ აფეთქების ფოტოთი.


const img = document.querySelector("img")
const start = document.getElementById("start")
function Explode() {
    img.src = "images/image copy.png"
}

start.addEventListener("click" , function() {
    setInterval(Explode , 5000)
})