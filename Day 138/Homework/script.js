// მოცემული API-ს მეშვეობით გააკეთეთ მსგავსი საიტი, ეცადეთ კონტენტი
//  და დიზაინი მიამსგავსოთ მაქსიმალურად, საიტზე არსებული ყველა ინფორმაცია უნდა წამოიღოთ API-დან.

const main = document.querySelector(".main")


fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.map(function(product) {
            main.innerHTML += `
                <div class="card">
                    <p class="title">${product.title}</p>
                    <img src=${product.image} width="100px">
                    <div class="Buy">
                        <p class="price">$ ${product.price}</p>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            
            `
        })

    })