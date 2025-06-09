function CalculateBmi() {
  let width = document.getElementById("width").value
  let height = document.getElementById("height").value
  let result = document.getElementById("span")
  let span2 = document.getElementById("span2")
  width = parseFloat(width);
  height = parseFloat(height);

  height = height / 100;
  let bmi = width / (height * height);

  if (bmi < 18.5) {
    result.textContent = "Underweight"
    span2.textContent = bmi.toFixed(1)
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.textContent = "Normal"
    span2.textContent = bmi.toFixed(1)
  } else if (bmi >= 25 && bmi < 29.9) {
    result.textContent = "Overweight"
    span2.textContent = bmi.toFixed(1)
  } else if (bmi >= 30 && bmi < 39.9) {
    result.textContent = "obese"
    span2.textContent = bmi.toFixed(1)
  } else {
    result.textContent = "extremly obese"
    span2.textContent = bmi.toFixed(1)
  }
}
