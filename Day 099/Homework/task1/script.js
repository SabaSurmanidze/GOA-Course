// 1. შექმენით p ელემენტი და დაამატეთ შიგნით ტექსტი "This is added by JavaScript", createTextNode()-ს გამოყენებით.

let p = document.getElementById("p")
let newtext = document.createTextNode("This is added by JavaScript")
p.appendChild(newtext)