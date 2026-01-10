// შექმენით საიტი, სადაც:

// * გექნებათ 2 განსხვავებული ელემენტი, შემდეგ ერთი ელემენტი ჩაუსვით მეორეს შვილად, .appendChild()-ის გამოყენებით.
// * გექნებათ 2 ელემენტი, div და მასში ჩასმული p, შემდეგ .removeChild()-ის გამოყენებით პარაგრაფი მოაშორეთ მშობელს.
// * გექნებათ ღილაკი, შემდეგ ამ ღილაკზე დაამატეთ ორი მოვლენა: onmouseover(), onmouseout(), ორივეში გამოიძახეთ 
// ფუნქცია, პირველმა კონსოლში გამოიტანოს 5, მეორემ კი 10.
// * გექნებათ div, შიგნით button-ით. ჯავასკრიპტში შექმენით ახალი პარაგრაფი ელემენტი და .replaceChild()-ის 
// მეშვეობით ჩაანაცვლეთ div-ის button-თან.




const main = document.getElementById("main")
const p = document.getElementById("p")

main.appendChild(p)

main.removeChild(p)


const btn = document.getElementById('btn')

btn.onmouseover = function () {
    console.log(5)
}

btn.onmouseout = function () {
    console.log(10)
}

const btn2 = document.getElementById("btn2")
const div = document.getElementById("div")
const text = document.getElementById("text")



div.replaceChild(text , btn2)