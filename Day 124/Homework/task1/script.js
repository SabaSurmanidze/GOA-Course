// 2) შექმენით ფორმა სახელითა და ასაკის ველებით + დადასტურების ღილაკი. 
// JS-ში აიღეთ ეს ელემენტები, form-ის დადასტურებისას გააუქმეთ ნაგულისხმევი
//  ქცევა და კონსოლში დაბეჭდეთ: "გამარჯობა [name], შენ ხარ [age] წლის"



const form = document.querySelector("form")
const nameInput = form.name
const ageInput = form.age


form.addEventListener("submit" , (e) => {
    e.preventDefault()


    const name = nameInput.value
    const age = ageInput.value
    console.log(" you are " +  name + " and you are  " + age + " years old")
    nameInput.value = ""
    ageInput.value = ""

} )