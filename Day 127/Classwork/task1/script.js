// 1) შექმენით გვერდი რომელზეც გექნებათ პროდუქტების div,
//  შექმენით პროდუქტების ობიექტების სია, რომელსაც for
//   ციკლით გადვულით და თითოეულს დაამტებთ პროდუქტების 
//   ჩამონათვალში, ასევე აიღეთ ღილაკი რომელზე დაჭერისასაც 
//   პროდუქტი გადავა მომხმარებლის კალათში


const products = document.getElementById("products")

const productList = [
    {name: "product 1" , price: "100"},
    {name: "product 2" , price: "200"},
    {name: "product 3" , price: "300"},
    {name: "product 4" , price: "400"},
    {name: "product 5" , price: "500"},
]



for (let i = 0 ; i < productList.length ; i ++) {
    const product = productList[i]

    const placeholdeImg = document.createElement("img")
    products.appendChild(placeholdeImg)
    placeholdeImg.src = "images/placeholder.png"
    placeholdeImg.style.width = "200px"
    placeholdeImg.style.height = "170px"

    const productName = document.createElement("h5")
    products.appendChild(productName)
    productName.textContent = product.name

    const productPrice = document.createElement("p")
    products.appendChild(productPrice)
    productPrice.textContent = product.price

    const addcartBtn = document.createElement("button")
    products.appendChild(addcartBtn)
    addcartBtn.textContent = "Add To Cart"

    addcartBtn.addEventListener("click" , () => {
        const cartDiv = document.createElement("div")
        cartDiv.className = "cart"
        products.appendChild(cartDiv)
        const cartName = document.createElement("h3")
        cartName.textContent = product.name
        const cartPrice = document.createElement("p")
        cartPrice.textContent = product.price

        cartDiv.appendChild(cartName)
        cartDiv.appendChild(cartPrice)
    })

}

