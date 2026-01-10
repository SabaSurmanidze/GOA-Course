// 5) შექმენით div ბლოკი (200x200px) და სამი ღილაკი: Red, Green, Blue.
//  JS-ში დააჭერთ რომელიმეს — div-ის ფონი შეიცვალოს შესაბამის ფერად;
//  დამატებით, კონსოლში გამოიტანეთ რომელი ფერი გამოირჩა მომხმარებელმა


const main = document.getElementById("main")
const blueBtn = document.querySelector(".blue")
const redBtn = document.querySelector(".red")
const greenBtn = document.querySelector(".green")


blueBtn.addEventListener("click" , () =>{
    main.style.backgroundColor = "blue"
    console.log("you choose blue")
})

redBtn.addEventListener("click" , () =>{
    main.style.backgroundColor = "red"
    console.log("you choose red")
})

greenBtn.addEventListener("click" , () =>{
    main.style.backgroundColor = "green"
    console.log("you choose green")
})