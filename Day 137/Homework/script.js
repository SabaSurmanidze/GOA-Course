const main = document.querySelector(".main")

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(function(data) {
        console.log(data)
        for (let i = 0 ; i < data.length ; i++) {
            let product = data[i]
            main.innerHTML +=`
            <div class="card">
            <img src=${product.image}>
            <p>${product.title}</p>
            <p>${product.price}</p>
            <p>${product.rating.rate}</p>
            <p>${product.rating.count}</p>
            <p>${product.category}</p>
            <p>${product.description}</p>
            </div>
            `
        }
    })
