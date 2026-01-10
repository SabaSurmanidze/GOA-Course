// 5. საიტზე გქონდეთ პარაგრაფი, რომელზე დაჭერის შედეგადაც გამოჩნდება ქვემოთ დამალული ელემენტი.

const btn = document.getElementById("btn")
const p = document.getElementById("p")

btn.addEventListener("click" , function () {
    p.style.display = "flex"
})