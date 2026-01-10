// 9. საიტზე დაამატეთ ფოტო და ღილაკი, ღილაკზე დაჭერის შემდეგ კი გაუშვით ფუნქცია, რომელიც ამ ფოტოს შეცვლის.


const img = document.getElementById("img")
const btn = document.getElementById("btn")

btn.addEventListener("click" , function () {
    img.src = "/Day 103/Classwork/task1/images/Screenshot 2024-08-23 133019.png"
})