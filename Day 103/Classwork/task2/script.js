

// 2. შექმენით საიტი, სადაც გექნებათ ტექსტი 'do not remove mouse from a button once you click it!'
//  და ღილაკი, ამ ღილაკზე თუ მომხმარებელი მაუსს დააჭერს და შემდეგ აუშვებს, კონსოლში გამოიტანეთ ტექსტი 'you lost!'.



const btn = document.getElementById("btn")

btn.addEventListener("mouseout" , function () {
    console.log("you lost")
})
