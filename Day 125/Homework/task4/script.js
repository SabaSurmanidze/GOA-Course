
const main = document.getElementById("main")
const blueBtn = document.querySelector(".blue")
const redBtn = document.querySelector(".red")
const greenBtn = document.querySelector(".green")
const clear = document.getElementById("clear")

const colorSave = localStorage.getItem("color")

if (colorSave) {
    main.style.backgroundColor = colorSave
}

blueBtn.addEventListener("click" , () =>{
    main.style.backgroundColor = "blue"
    console.log("you choose blue")
    localStorage.setItem("color" , "blue")
})

redBtn.addEventListener("click" , () =>{
    main.style.backgroundColor = "red"
    console.log("you choose red")
    localStorage.setItem("color" , "red")
})

greenBtn.addEventListener("click" , () =>{
    main.style.backgroundColor = "green"
    console.log("you choose green")
    localStorage.setItem("color" , "green")
})

clear.addEventListener("click" , () => {
    main.style.backgroundColor = "#222"
    localStorage.setItem("color" , "#222")
})