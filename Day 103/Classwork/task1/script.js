//  1. შექმენით საიტი, სადაც გექნებათ ფოტო და ღილაკი. ღილაკზე დაჭერის შემდეგ შეცვალეთ ფოტო, გამოიყენეთ pointerdown მოვლენა.

const img = document.getElementById("img")
const btn = document.getElementById("change")

btn.addEventListener("pointerdown" , function() {
    img.src = "images/Screenshot 2024-08-23 133019.png"
})

