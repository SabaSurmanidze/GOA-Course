
// bonus:
// 3. შექმენით საიტი, სადაც გექნებათ პარაგრაფი 'do not hover over me', თუ მომხმარებელი მაუსით ამ პარაგრაფზე
//  გადაატარებს, გაუშვით ფუნქცია, რომელიც ტექსტის ფერს გააწითლებს, ხოლო კონტენტს კი შეცვლის სხვა
//   შინაარსით, ვთქვათ 'why did you hover over me'.



const h1 = document.getElementById("h1")

h1.addEventListener("mouseover" , function (event) {
    h1.textContent = 'why did you hover over me'
    event.target.style.color = "red"
})