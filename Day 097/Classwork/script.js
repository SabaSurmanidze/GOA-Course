// შექმენით საიტი, სადაც გექნებათ ფოტო, სათაური და 6 ღილაკი (სხვადასხვა ფუნქციებით),

// 4 ღილაკით უნდა შეგეძლოთ ფოტოს width, height, border radius, box-shadow, 

// დანარჩენი 2 ღილაკით უნდა შეგეძლოთ სათაურის ფერის და ზომის შევლა.


const h1 = document.getElementById("h1")
const img = document.getElementById("img")

function changeWidth(){
    img.style.width = "500px"
}
function changeHeight(){
    img.style.height = "500px"
}

function changeBorder(){
    img.style.borderRadius = "10px"
}

function changeShadow(){
    img.style.boxShadow = "0px 0px 5px 5px black"
}

function changeColor() {
    h1.style.color = "red"
}

function changeSize(){
    h1.style.fontSize = "20px"
}