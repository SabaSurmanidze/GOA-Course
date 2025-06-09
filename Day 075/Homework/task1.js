let btn = document.getElementById("btn")

function ButtonColor(){
    btn.style.color = "white"
    btn.style.borderRadius = "8px"
    btn.style.width = "100px"
    btn.style.height = "40px"
    btn.style.background = "#222"
    btn.style.border = "none"
}

function operations(){
    console.log(5 + 6)
    console.log(10 * 7)
    console.log(10 / 2)
    console.log(100 - 50)
}

operations()