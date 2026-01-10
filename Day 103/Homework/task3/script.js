// 3. საიტზე დაამატეთ პარაგრაფი, როდესაც ამ პარაგრაფზე მაუსს მიიტანთ გვერდზე 
// გამოაჩინეთ ახალი ელემენტი, როცა გამოიტანს გააქრეთ.


const p = document.getElementById("p")
const main = document.getElementById("main")
const newel = document.createElement("p")
const textNode = document.createTextNode("some text")

p.addEventListener("pointerenter" , function () {
    newel.appendChild(textNode)
    main.appendChild(newel)
})

p.addEventListener("pointerout" , function () {
    newel.removeChild(textNode)
    main.removeChild(newel)
})



