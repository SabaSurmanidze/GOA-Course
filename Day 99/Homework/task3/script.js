// 3. შექმენით div ელემენტი, JavaScript-ის გამოყენებით შეცვალეთ მისი ფონის ფერი ლურჯზე და დაამატეთ მასში ტექსტი.

const div = document.getElementById("div")
const newtext = document.createTextNode("welcome")
div.appendChild(newtext)
div.style.backgroundColor = "red"
