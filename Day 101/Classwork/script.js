// 1. შექმენით საიტი, სადაც გექნებათ დივი, მასში კი ღილაკი, 

// დივში არსებული ღილაკი ჯავასკრიპტის მეშვეობით მოაშორეთ,

// 2. შექმენით საიტი, სადაც გექნებათ პარაგრაფი, ცალკ დივი და მასში კი ღილაკი, 

// ჯავასკრიპტის მეშვეობით დივში არსებული ღილაკი ჩაანაცვლეთ პარაგრაფით.


const div = document.getElementById("main")
const btn = document.getElementById("btn")
div.removeChild(btn)



const p = document.getElementById("p")
const div2 = document.getElementById("div")
const btn2 = document.getElementById("btn2")


div2.replaceChild(p , btn2)

