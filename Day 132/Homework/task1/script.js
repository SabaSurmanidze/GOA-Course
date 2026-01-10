// 1. random
//    Generate a random number between 0 and 1
//    Generate a random number between 0 and 10
//    Generate a random integer between 1 and 100


console.log(Math.random())
console.log(Math.floor(Math.random() * 10))
console.log(Math.floor(Math.random() * 100))





// 2. floor
//    Round 4.7 down to the nearest integer
//    Round a random number between 0 and 10 down to the nearest integer
//    Round -3.2 down to the nearest integer



console.log(Math.floor(4.7))
console.log(Math.floor(Math.random() * 10))
console.log(Math.floor(-3.2))


// 3. Ternary operator
//    Check if age is 18 or more and print Adult or Minor
//    Print Even if num is divisible by 2, else Odd
//    Assign status = Passed if score is 50 or more, else Failed



let age = 19
result = age > 18 ? "Adult" : "Monor"
console.log(result)
let num = 8
result2 = num % 2 === 0 ? "even" : "odd"
let score = 80
result3 = score > 50 ? "passed" : "failed"



// 4. For loop (JS)
//    Print numbers from 1 to 5
//    Sum numbers from 1 to 10
//    Print each character of hello

for(let i = 0 ; i <= 5 ; i++) {
    console.log(i)
}
for(let i = 0 ; i<= 10; i++) {
    console.log(i + i)
}
let hello = "hello"

for (let i = 0 ; i < hello.length ; i++) {
    console.log(i)
}

// 5. push
//    Add apple to the end of fruits array
//    Add numbers 1, 2, 3 to an empty array
//    Add JS to skills array

let fruits = ["banana" , "pinnaple" , "orange"]
fruits.push("apple")
console.log(fruits)
let emptyArr = []
emptyArr.push(1,2,3)
console.log(emptyArr)
let skills = ["html" , "css" , "python"]
skills.push("JS")
console.log(skills)

// 6. pop
//    Remove the last item from fruits array
//    Remove the last number from 1,2,3,4
//    Remove the last element from skills array

let fruit2 = ["banana" , "pinnaple" , "orange"]
fruit2.pop()
console.log(pop)
let nums = [1,2,3,4]
nums.pop()
console.log(nums)
let skills2 = ["html" , "css" , "python"]
skills2.pop()
console.log(skills2)

// 7. shift
//    Remove the first item from fruits array
//    Remove the first number from 5,6,7
//    Remove the first element from skills array



let fruit3 = ["banana" , "pinnaple" , "orange"]
fruit3.shift()
console.log(fruit3)
let nums2 = [5,6,7]
nums2.shift
console.log(nums2)
let skills3 = ["html" , "css" , "python"]
skills3.shift()
console.log(skills3)



// 8. map
//    Multiply each number in 1,2,3 by 2
//    Add 1 to each number in 4,5,6
//    Convert each string in a,b,c to uppercase

let nums3 = [1,2,3]
let res = nums3.map(function(nums) {
    return nums * 2
})

console.log(res)

let nums4 = [4,5,6]
let res2 = nums4.map(function(nums) {
    return nums + 1
})
console.log(res2)

let strings = ["a" , "b" ,"c"]

let res3 = strings.map(function(str) {
    return str.toUpperCase()
})

console.log(res3)