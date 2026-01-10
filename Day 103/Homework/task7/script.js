// 7. სიაში გაქვთ ელემენტები, თითოს აქვს გვერდზე წაშლის ღილაკი, ამ ღილაკზე დაჭერა კი მათ სიიდან ამოშლის.

const main = document.querySelector("ul")

const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")

const li1 = document.getElementById("li1")
const li2 = document.getElementById("li2")
const li3 = document.getElementById("li3")
const li4 = document.getElementById("li4")


btn1.addEventListener("click" , function () {
    main.removeChild(li1)
})
btn2.addEventListener("click" , function () {
    main.removeChild(li2)
})
btn3.addEventListener("click" , function () {
    main.removeChild(li3)
})
btn4.addEventListener("click" , function () {
    main.removeChild(li4)
})