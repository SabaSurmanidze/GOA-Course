// 2. შექმენით ობიექტი სახელად student ისეთი კუთვნილებებით, როგორებიცაა name, grade, passed და year.
// შემდეგ if-else გამოყენებით, შეამოწმეთ, არის თუ არა passed - true. თუ ასეა, დაბეჭდეთ: 'student passed the grade',
// წინააღმდეგ შემთხვევაში, დაბეჭდეთ 'student failed the grade'.


const student = {
    name: "saba",
    grade: 8,
    passed: false,
    year : 2011 
} 

if (student.passed == true) {
    console.log('student passed the grade')
}else{
    console.log('student failed the grade')
}
