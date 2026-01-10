// 5. შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს რიცხვის 
// შეყვანას prompt()-ის გამოყენებით. შემდეგ კი დაპრინტეთ 1-იდან მაგ რიცხვამდე ყველა ციფრი.

let user = Number(prompt("Enter Some Number"))
let num = 1
while (num < user) {
    console.log(num)
    num ++
}