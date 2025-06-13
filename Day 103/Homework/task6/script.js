// 6. საიტზე დაამატეთ ღილაკი, რომელზე დაჭერის დროსაც ქვევით არსებულ დივში დაემატება ახალი ელემენტი.

const btn = document.getElementById("btn")
const main = document.getElementById("main")


btn.addEventListener("click" , function () {
    const newel = document.createElement("p")
    const newtext = document.createTextNode("some text")
    newel.appendChild(newtext)
    main.appendChild(newel)
})