const input = document.getElementById("input")
let result = document.getElementById("result")
let password = "saba"


while(input.value != password) {
    result.textContent = "incorrect try again"
}

result.textContent = "congrats you Guess the password"