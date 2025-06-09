// 1. დაამატეთ click event listener ღილაკზე, რომელიც პარაგრაფის ტექსტს შეცვლის შეტყობინებით „button clicked!“.



const btn = document.getElementById("btn")
const p = document.querySelector("p")


function changeColor() {
    p.style.color = "red"
}
btn.addEventListener("click" , changeColor)