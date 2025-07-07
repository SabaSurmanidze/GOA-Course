// 3. შექმენით სია და დივი, შემდეგ for loop-ით შექმენით სათაურები,
//  დაამატეთ შიგნით სიის ელემენტების ტექსტები, ბოლოს კი დააამატეთ
//   ეს ტექსტიანი ელემენტები დივში.


const fruits = ["banana" , "apple" , "pinnaple"]
const div = document.querySelector("div")

for (let i = 0;  i < fruits.length; i++) {
    const text = document.createElement("p")
    text.textContent = fruits[i]
    div.appendChild(text)
}
