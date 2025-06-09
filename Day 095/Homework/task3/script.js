// 3. მომხარებელს შემოატანინეთ prompt-ის დახმარებით სახელი, გვარი,
//  ასაკი და შექმენით მათი მეშვეობით ობიექტი. დაბეჭდეთ ეს ობიექტი,
//   შეუცვალეთ სახელის კუთვნილება და ხელახლა დაბეჭდეთ ეს ობიექტი.



const userName = prompt("Enter your Name")
const userSurname = prompt("Enter your Surname")
const userAge = Number(prompt("Enter your Age"))


function Person(userName , userSurname , userAge){
    this.name = userName
    this.surname = userSurname
    this.age = userAge
}

const person1 = new Person(userName , userSurname , userAge)
console.log(person1)
const person2 = new Person("luka" , userSurname , userAge)
console.log(person2)