// API-დან წამოიღეთ ინფორმაცია პირველი პროდუქტის შესახებ და მისი მნიშვნელობები დაამატეთ/გამოიყენეთ html-ში,


const main = document.querySelector(".main")

fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        main.innerHTML += `
            <p class="title">${data.title}</p>
            <img src=${data.image}>
            <p class="price">${data.price}$</p>
            <p class="cat">${data.category}</p>
        
        
        `
    })