// 2. შექმენით საიტი, სადაც გექნებათ ბურთი და ღილაკი, ღილაკზე დაჭერის დროს ბურთი უნდა ჩამოვიდეს
//  ქვემოთ, 50 px-ით, შეგიძლიათ გამოიყენოთ positions  ან margins.



const btn = document.getElementById("btn")
const ball = document.getElementById("ball")

btn.addEventListener("click" , function() {
    ball.style.marginTop = "50px"
})