// 4. შექმენით ღილაკის ელემენტი ტექსტით "Click Me" და დაამატეთ ის მანამდე შექმნილ ცარიელ div-ში, id-ს მეშვეობით.


const main = document.getElementById("main")
const btn = document.createElement("button")
const btnText = document.createTextNode("click me")

main.appendChild(btn)
btn.appendChild(btnText)
