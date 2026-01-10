let img = document.getElementById("img")
let btn = document.getElementById("btn")
let cont = document.getElementById("cont")

function changeTheme(){
    cont.style.background = "black"
}


function changeBtnColor(){
    btn.style.color = "black"
}

function defaultTheme(){
    btn.style.color = "black"
    cont.style.background = "#222" 
}


function changeImage(){
   img.src = 'images/image2.avif'
}

