// 4. როდესაც მომხმარებელი საიტზე მაუსს დააჭერს, ფონის ფერი შეცვალეთ, როდესაც აუშვებს დააბრუნეთ თეთრზე.

const main = document.querySelector(".main")

main.addEventListener("pointerenter" , function () {
    main.style.backgroundColor = "red"
})

main.addEventListener("pointerout" , function () {
    main.style.backgroundColor = "white"
})