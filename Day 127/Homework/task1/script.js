// 1) შექმენით მსგავსი ფუნქციონალური ჯეირანის თამაში javascript-ით, შეეცადეთ გასტილოთ ანალოგიურად


const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const result = document.getElementById("res")
const h2 = document.getElementById("h2")
const choice = ["rock" , "paper" , "scissors"]



rockBtn.addEventListener("click" , () => {
    const RandomChoice = choice[Math.floor(Math.random() * 3 )]
    result.textContent = RandomChoice
    console.log(RandomChoice)
})

paperBtn.addEventListener("click" , () => {
    const RandomChoice = choice[Math.floor(Math.random() * 3 )]
    result.textContent = RandomChoice
    console.log(RandomChoice)

})

scissorsBtn.addEventListener("click" , () => {
    const RandomChoice = choice[Math.floor(Math.random() * 3 )]
    result.textContent = RandomChoice
    console.log(RandomChoice)
})
