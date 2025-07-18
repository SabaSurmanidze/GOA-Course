const darkModeBtn = document.getElementById("darkModeBtn")
const lightModeBtn = document.getElementById("lightModeBtn")

lightModeBtn.addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "#ffffff")
})

darkModeBtn.addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "#333")
})

