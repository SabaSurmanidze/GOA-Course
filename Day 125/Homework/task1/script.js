// 2) შექმენით To-Do სია: input (type="text") და ღილაკი "Add". 
// დამატებისას შექმენით li ელემენტი ul-ში. ყველა ამოცანა შეინახეთ 
// localStorage-ში (მასივად). გვერდის ახლებურად გახსნისას ამოიღეთ 
// და დაარენდერეთ არსებული ამოცანები

const form = document.querySelector("form")
const list = document.querySelector("ol")
const add = form.todo


const todo = localStorage.getItem("todo")
if (todo) {
    const li = document.createElement("li")
    li.textContent = todo
    list.appendChild(li)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const newItem = document.createElement("li")
    newItem.textContent = add.value

    list.appendChild(newItem) 

    localStorage.setItem("todo", add.value) 
    add.value = "" 
})



