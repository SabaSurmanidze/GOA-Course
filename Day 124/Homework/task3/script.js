// 4) შექმენით Counter: span სადაც გამოჩნდება 
// რიცხვი (იწყება 0-დან) და სამი ღილაკი: +1, -1,
//  Reset. JS-ში დაამატეთ მოვლენები: +1 ზრდის მნიშვნელობას,
//  -1 აკლებს (არ დაუშვათ რომ ჩამოვიდეს 0-ზე დაბლა), Reset აბრუნებს 0-ზე


let result = document.getElementById("result")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")
const plusBtn = document.getElementById("plus")
let x = 0

minusBtn.addEventListener("click" , () => {
    x -= 1
    result.textContent = x
    if (x < 1 ) {
        x = 0
        result.textContent = x
    }
})

resetBtn.addEventListener("click" , () =>{
    x = 0
    result.textContent = x
})

plusBtn.addEventListener("click" , () =>{
    x += 1
    result.textContent = x
})