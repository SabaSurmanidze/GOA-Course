// 2) მოცემული API-იდან წამოიღეთ მონაცემები და დაარენდერეთ
//  (გამოიტანეთ) საიტზე, უნდა შეიძლებოდეს თითოეული პროდუქტის 
//  კალათაში დამატება. ყველაფერი გასტილეთ ლამაზად, დაამტეთ
//   სურათები და icons, გვერი უნდა იყოს რესპონსიული

const main = document.getElementById("main")


function renderApi(data) {
    for (product of data) {
        main.innerHTML += `
        <div class="card">
            <img src=${product.image}>
            <h5 class="tittle">${product.title}</h5>
            <p class="price">${product.price}$</p>
            <p class="category">${product.category}</p>
            <button>Add To Cart</button>
        </div>
        `;


    }
}






async function getData() {

    try {
        const resolve =  await fetch('https://fakestoreapi.com/products')
        const data =  await resolve.json()
        console.log(data)
        renderApi(data)
    }catch(error) {
        console.log(error)
    }
}

getData()