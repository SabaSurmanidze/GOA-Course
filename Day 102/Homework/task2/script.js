// 2. დაამატეთ pointerover-ის მოვლენის მსმენელი div-ზე, რომელიც მაუსის მასზე გადატანისას ფონის ფერს მწვანედ შეცვლის.



const main = document.getElementById("main")

main.addEventListener("pointerover" , changeColor)

function changeColor () {
    main.style.backgroundColor = "green"
}
