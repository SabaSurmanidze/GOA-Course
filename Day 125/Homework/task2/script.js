const toggleButton = document.querySelector("button");
const body = document.body

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.style.backgroundColor = savedTheme
  toggleButton.textContent = savedTheme 
}
toggleButton.addEventListener("click", () => {
  if (toggleButton.textContent === "Dark Theme") {
    toggleButton.textContent = "Light Theme";
    body.style.backgroundColor = "black"
    localStorage.setItem("theme" , savedTheme)
  } else if (toggleButton.textContent === "Light Theme") {
    toggleButton.textContent = "Dark Theme";
    body.style.backgroundColor = "white"
    localStorage.setItem("theme" , savedTheme)

  }
});
