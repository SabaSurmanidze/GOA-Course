// შექმენით ღილაკი, რომელზე დაჭერის შემდეგაც საიტზე მანამდე ცარიელ div-ში ჩაემატება button ელემენტი,

// (დაგჭირდებათ ფუნქცია ჯავასკრიპტში,
// createElement, appendChild..)


function showBtn() {
    let main = document.getElementById("main")
    let newbtn = document.createElement("button")
    newbtn.textContent = "button"
    main.appendChild(newbtn)
}