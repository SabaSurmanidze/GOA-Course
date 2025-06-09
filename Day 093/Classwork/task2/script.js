//  bonus: 
// 2. შექმენით car ობიექტი, დაამატეთ გამოშვების წელის (makeYear) კუთვნილება და გაუტოლეთ 2000-ს, 

// შემდეგ ობიექტის გარეთ დაწერეთ if-else, თუ ობიექტის გამოშვების წელი მეტია 1990-ზე გამოიტანეთ 'pass', სხვა შემთხვევაში 'dump'.

let car = {
    makeYear: 2000,
}

if (car.makeYear > 1990){
    console.log("pass")
}else{
    console.log("dump")
}