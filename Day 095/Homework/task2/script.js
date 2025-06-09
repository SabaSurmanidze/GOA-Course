// 2. შექმენით თქვენი თავის ობიექტი შემდეგი კუთვნილებებით: name, surname, age(შეგიძლიათ თქვენც მოიფიქროთ).
//  იგვიე გზით შექმენით თქვენი რომელიმე ოჯახის წევრის ობიექტი.
// თქვენი დავალებაა:
// 1. დაბეჭდოთ ეს ობიექტები
// 2. დაბეჭდოთ მათი თიოეული კუთვნილება
// 3. შეუცვალეთ 2 ობიექტს რომელიმე კუთვნილება და დაბეჭდეთ
// 4. დაუმატეთ ახალი კუთვნილებები ორივეს და დაბეჭდეთ
// 5. წაშალეთ ამ ობიექტებში სასურველი კუთვნილება



let Me = {
    name: "saba",
    surname: "surmanidze",
    age: 14,
    isAdult: false,
    isStudent: true
}

let Mum = {
    name: "indira",
    surname: "beridze",
    age: 35,
    isAdult: true,
    isStudent: false
}

console.log(Me , Mum)
console.log(Me.name , Me.surname , Me.age , Me.isAdult)
console.log(Mum.name , Mum.surname , Mum.age , Mum.isAdult)

console.log(Me.age = 20 , Me.isAdult = true)
console.log(Mum.age = 15 , Mum.isAdult = false)
