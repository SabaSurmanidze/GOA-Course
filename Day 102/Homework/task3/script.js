// 3. დაამატეთ pointerout-ის მოვლენის მსმენელი იმავე div-ზე, რათა მაუსის გადატარებისას ფონის ფერი თეთრად შეცვალოთ.


const main = document.getElementById("main")

main.addEventListener("pointerover" , changeColorIn)
main.addEventListener("pointerout" , changeColorOut)
function changeColorIn () {
    main.style.backgroundColor = "green"
}

function changeColorOut () {
    main.style.backgroundColor = "white"
}

