// 1. Take the array [1, 2, 3, 4, 5] and return a new array where each number is doubled if it’s 
// even, otherwise leave it as is.
let nums = [1, 2, 3, 4, 5]
let newNums = []

nums.map(function(num) {
    if (num % 2 === 0 ){
        newNums.push(num *2)
    }
    console.log(newNums)
})

// 2. Given the array ["cat", "elephant", "dog"], return an array with the first letter of each string.


let Animals = ["cat", "elephant", "dog"]
let digits = []

Animals.map(function(digit) {
    digits.push(digit[0])
    console.log(digits)
})


// 3. From ["alice", "bob", "charlie"], return a new array of names where only the first letter is capitalized.

let names =  ["alice", "bob", "charlie"]
let upperNames = []
names.map(function(upper) {
    upperNames.push(upper.toUpperCase())
    console.log(upperNames)
})



// 4. For the array [10, 20, 30], return a new array of strings in the form "Index: X, Value: Y".

let numbers = [10, 20, 30]
let newArr = []
numbers.map(function(nums , index) {
    newArr.push(`index : ${index} , value: ${nums}`)
    console.log(newArr)
})


// 5. From the array [{id:1, name:"apple"}, {id:2, name:"banana"},{id:3, name:"cherry"}], 
// return a new array containing only the name values in uppercase.

let fruits = [
    {id:1, name:"apple"},
    {id:2, name:"banana"},
    {id:3, name:"cherry"}
]

let NewArr = []

fruits.map(function(fruit) {
    NewArr.push(fruit.name.toUpperCase())
    console.log(newArr)
})



