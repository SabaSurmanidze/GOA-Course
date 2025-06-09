// შექმენით person კონსტრუქტორი კუთვნილებებით - name, lastname, age.
//  შემდეგ მისი მეშვეობით შექმენით 3 ობიექტი.


function Person(name , lastname , age) {
    this.name = name
    this.lastname = lastname
    this.age = age
}

const person1 = new Person("saba" , "surmanidze" , 14)
const person2 = new Person("luka" , "gurgenidze" , 12)
const person3 = new Person("gio" , "feradze" , 28)


console.log(person1 , person2 , person3)
