const images = [
    "images/foot1.png",
    "images/foot2.png",
    "images/foot3.png",
    "images/foot4.png",
    "images/foot5.png"
]


const backBtn = document.getElementById("backBtn")
const nextBtn = document.getElementById("nextBtn")
const mainImg = document.querySelector("img")

let imgIndex = 0

nextBtn.addEventListener("click", () => {
    imgIndex += 1;
    if (imgIndex >= images.length) {  
        imgIndex = 0;  
    }
    mainImg.src = images[imgIndex];
});


backBtn.addEventListener("click", () => {
    imgIndex -= 1;
    if (imgIndex < 0) { 
        imgIndex = images.length - 1;  
    }
    mainImg.src = images[imgIndex];
});

