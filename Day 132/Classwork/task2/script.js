// 2. შექმენით ელემენტების სია, რომელსაც გადაუვლით map()-ით და გააორმაგებთ თითოეულ ელემენტს.
// 3. შექმენით სტრინგების სია, რომელსაც გადაუვლით map()-ით და თთოეულ ელემენტს გვერდზე მიუწერთ თავის ინდექსს.
// 4. შექმენით ელემენტების სია, გადაუარეთ map-ით და შეკრიბეთ ყველა ელემენტი, ბოლოს დააბრუნეთ ჯამი.
let nums = [1,2,3,4,5,6]

let result = nums.map(function(numbers) {
    return numbers * 2
})

console.log(result)


let products = ["apple" , "banana", "water" , "cola" , "fanta"]

let result2 = products.map(function(cart , index) {
    return `${index}: ${cart}`
})

console.log(result2)

let numbers = [1,2,3,4,5,6]

let result3 = numbers.map(function(nums) {
    return nums + nums
})

console.log(result3)