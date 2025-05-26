// 1. შექმენით Car კონსტრუქტორის ფუნქცია, რომელიც არგუმენტად მიიღებს მანქანის
//  მარკას, მოდელს და წელს, შემდეგ კი მათი მეშვეობით შექმენით ახალი ობიექტი.
// 2. Car ობიექტის კონსტრუქტორს დაუმატეთ მეთოდი getDescription,
//  რომელიც დააბრუნებს სტრინგს, რომელიც გააერთიანებს მანქანის მარკას, მოდელს და წელს.
// 3. უკვე შექმნილი კონსტრუქტორის მეშვეობით შექმენით სამი განსხვავებული 
// Car ობიექტი და გამოიტანეთ მათი აღწერილობები getDescription მეთოდის გამოყენებით.
// 4. გააფართოვეთ Car კონსტრუქტორი age მეთოდის დამატებით, რომელიც
//  გამოითვლის მანქანის ასაკს ახლანდელი წლის მიხედვით.




function Car(brand , year){
    this.brand = brand
    this.year = year


    function getDescription(){
        return `car brand is ${this.brand} , and the realese date is ${this.year}`
    }
    function age(){
        return `age of car is ${2025 - this.year}`
    }
}


const car1 = new Car("bmw" , 2010)
const car2 = new Car("toyota" , 2020)
const car3 = new Car("mustang" , 2000)
console.log(car1.getDescription())
console.log(car2.getDescription())
console.log(car3.getDescription())
console.log(car1.age())
