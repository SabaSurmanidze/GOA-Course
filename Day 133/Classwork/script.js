// 1. Given an array of numbers, use `map()` to console.log new array where each number is doubled.
let nums = [1,2,3,4,5]
let newNums = []

nums.map(function(num) {
    newNums.push(num * 2)
})

// 2. Given an array of strings, use `map()` to console.log new array where each string is converted to uppercase.

let strings = ["saba" , "nika" , "luka"]
let newStr = []

strings.map(function(str){
    newStr.push(str.upprecase())
    console.log(newStr)
})

// 3. Given an array of numbers, create newList, use `map()` to console.log new array 
// where 5 is added to each number and push this numbers into newList, in the end console.log(newList).
let numbers = [1,2,3,4,5]
let newNumbers = []
numbers.map(function(nums){
    console.log(nums + 5)
    newNumbers.push(nums)
    console.log(newNumbers)
})
// 4. Given an array of strings, use `map()` to console.log a new array that contains only the first letter of each string.
let strs = ["saba" , "luka" , "nika"]
let digits = []

strs.map(function(str) {
    digits.push(str[0])
})
// 5. Given an array of numbers, use `map()` to console.log a new array where each number is squared.

let nums2 = [1,2,3,4,5]
let newNums2 = []

nums2.map(function(num) {
    newNums2.push(num * num)
})


// 6. Given an array of names, use map() to console.log greeting sentences tailored to names

let names = ["saba" , "luka" , "nika"]

names.map(function(greet) {
    console.log(`hello ${greet}`)
})
