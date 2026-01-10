// 1. შექმენით საიტი სადაც გექნებათ ღილაკი, ამ ღილაკზე დაამატეთ 'click' addEventListent
//  და ფუნქციამ კონსოლში გამოიტანოს რიცხვი 5.

// * removeEventListener-ის მეშვეობით წაუშალეთ ზემოთ შექმნილ ფუნქციას event handler.



const btn = document.getElementById("btn")


function console(){
    console.log(5)
}
btn.addEventListener("click" , console)

btn.removeEventListener("click" , console)