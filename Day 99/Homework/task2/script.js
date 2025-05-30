// 2. შექმენით h2 ელემენტი ტექსტით "Welcome!", შემდეგ კი ჩასვით ის უკვე არსებული div-ში, რომელსაც მიანიჭებთ id-ს.

const div = document.getElementById("div")
const h2 = document.createElement("h2")
const newtext = document.createTextNode("welcome")
h2.appendChild(newtext)
div.appendChild(h2)