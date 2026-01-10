// 2. საიტზე დაამატეთ ფოტო, რომელზე მაუსის მიტანისას დროს მის
//  ზომას გაზრდით, ხოლო მაუსის გამოტანისას კი დაუბრუნებთ დააპატარავებთ.

const img = document.getElementById("img")

img.addEventListener("pointerenter" , function () {
    img.style.width = "500px"
})


img.addEventListener("pointerout" , function () {
    img.style.width = "200px"
})


