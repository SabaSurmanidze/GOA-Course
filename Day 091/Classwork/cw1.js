let width = Number(prompt("Enter your weight")) 

let height = Number(prompt("Enter your height"))

width = parseFloat(width)

height = parseFloat(height)

height = height / 100

let bmi = width / (height * height)

if (bmi < 18.5){
    alert("underweight")
}else if (bmi >= 18.5 && bmi < 24.9){
    alert("normal")
}else if (bmi >= 25 && bmi < 29.9){
    alert("overweight")
}else if (bmi >= 30 && bmi < 39.9){
    alert("obese")
}else {
    alert("extremly obese")
}

