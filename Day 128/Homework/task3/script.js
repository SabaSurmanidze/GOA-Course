// 3) შექმენით კლასი Car, რომელსაც ექნება brand, model და year. 
// დაამატეთ მეთოდი getInfo(), რომელიც დაბეჭდავს "ბრენდი: X,
//  მოდელი: Y, წელი: Z"


class car {
    constructor(brand , model , year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    getInfo() {
        console.log(`brand: ${this.brand}`)
        console.log(`model: ${this.model}`)
        console.log(`year: ${this.year}`)
    }
}

getInfo()

const myCar = new car("ford" , "mustang" , 2000)