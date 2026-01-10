// 1. შექმენით პარაგრაფი, ტექსტით 0, ასევე შექმენით ღილაკიც, რომელზე დაჭერის 
// შედეგადაც პარაგრაფის მნიშვნელობა ყოველ ჯერზე მოიმატებს 1-ით.

const result = document.getElementById("result")
const addBtn = document.getElementById("add")
let x = 0


addBtn.addEventListener("click" , function () {
    result.textContent = x
    x ++ 

})
