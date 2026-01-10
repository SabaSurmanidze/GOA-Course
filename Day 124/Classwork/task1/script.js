const form  = document.querySelector("form")
const emailInput = form.email
const passwordInput = form.password

form.addEventListener("submit" , (e) =>{
    e.preventDefault()

    const email = emailInput.value
    const password = passwordInput.value
    console.log(email)
    console.log(password)
    emailInput.value = ""
    passwordInput.value = ""
})
