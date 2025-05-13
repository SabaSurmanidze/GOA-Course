// შექმენით ობიექტი სახელწოდებით classroom, 

// კუთვნილებებით: studentCount, grade და favSubject.

// შემდეგ გამოიყენეთ if-else განაცხადი, რათა შეამოწმოთ, არის თუ არა studentCount კუთვნილების მნიშვნელობა 30-ზე მეტი. 

// თუ ასეა, დაბეჭდეთ "very big class", სხვა შემთხვევაში დაბეჭდეთ "Small Class".

// Bonus: 
// დაამატეთ if-else დანარჩენი ორი მნიშვნელობისათვისაც. 


const classroom = {
    studentCount: 21,
    grade: 10,
    favSubject: "sport",
}


if (classroom.studentCount > 30) {
    console.log("very big class")
}else{
    console.log("Small class")
}

if (classroom.grade > 8) {
    console.log("Good student")
}else{
    console.log("bad student")
}

