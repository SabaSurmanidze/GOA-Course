// შექმენით html-ში ul ელემენტი, რომელშიც js-იდან for loop()-ის გამოყენებით დაამატებთ ტექსტიან li ელემენტებს.

const ul = document.getElementById("ul")
const list = ["banana " , "apple" , "pinnaple"]

for (let i = 0 ; i < list.length; i++) {
    const li = document.createElement("li")
    const text = document.createTextNode(list[i])
    ul.appendChild(li)
    li.appendChild(text)
}

