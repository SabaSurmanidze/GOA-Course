// 4. დაამატეთ მოვლენის მსმენელი სურათზე, რომლის სიგანეც მასზე დაჭერისას  300 პიქსელი გახდება.


const img = document.getElementById("img")


function changeSize() {
    img.style.width = "300px"
}
img.addEventListener("click" , changeSize)