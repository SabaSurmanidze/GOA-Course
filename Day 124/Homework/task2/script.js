// 3) შექმენით input (type="password"), checkbox "ვაჩვენო პაროლი" და ღილაკი 
// "Login". JS-ში წამოიღეთ ელემენტები; checkbox-ზე დაკლიკებისას შეცვალეთ
//  პაროლის ველის type password/text-ზე; Login დაჭერისას კონსოლში
//  დაბეჭდეთ შეყვანილი პაროლი



const form = document.querySelector("form")
const passwordInput = form.password
const checkbox = form.checkbox


checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        passwordInput.type = "text"   
    } else {
        passwordInput.type = "password" 
    }
})


form.addEventListener("submit" , (e) => {
    e.preventDefault()

    password = passwordInput.value
    passwordInput.value = ""
    console.log(password)
})


