const form = document.querySelector("form")
const password = form.password
const massage = document.getElementById("massage")



form.addEventListener("submit" , (e) => {
    e.preventDefault()
    if (password.value.length >= 8) {
        massage.style.color = "green"
        massage.textContent = "valid password"
    }else {
        massage.style.color = "red"
        massage.textContent = "password must be more than 8 characters"
    }
    password.value = ""

})
