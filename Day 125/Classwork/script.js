// 1) შექმენით ფორმა რომელშიც გექნებათ 2 შესატანი ველი სახელისა და პაროლითვის, 
// ასევე დამადასტურებელი ღილაკი. ეს ყველა ელემენტი შეინახეთ javascript-ში
//  ცვლადებად, შემდეგ როდესაც ღილაკზე მოხდება დაჭერა წაშალეთ ფორმა და 
//  h1-ით (თავიდან გექნებათ Register) გამოუტანეთ მომხმარებელს "Welcome [username]

const h1 = document.querySelector("h1")
const form = document.querySelector("form")
const username = form.username
const password = form.password

const user = localStorage.getItem("username")
const pass = localStorage.getItem("password")

if (user !== "" && pass !== ""){
    h1.textContent = `Welcome ${user}`
}

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    const user = username.value
    const pass = password.value
    localStorage.setItem("username" , user)
    localStorage.setItem("password" , pass)

    h1.textContent = `Welcome ${user}`
    form.style.display = "none"
})