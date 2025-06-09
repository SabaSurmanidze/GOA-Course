// 4. შექმენით ობიექტი სახელწოდებით phone: brand, model, storage, batteryLife და is5G კუთვნილებებით,
// გამოიყენეთ if ოპერატორი, რათა შეამოწმოთ, აქვს თუ არა ტელეფონს is5G დაყენებული true-ზე. თუ ასეა, დაბეჭდეთ
//  'supports 5G', წინააღმდეგ შემთხვევაში დაბეჭდეთ 'doesn't support 5G'.

let phone = {
    brand: "samsung",
    model: "s24 ultra",
    storage: "264GB",
    is5G: true
}

if (phone.is5G == true) {
    console.log("supports 5G")
}else{
    console.log("doesn't support 5G")
}
