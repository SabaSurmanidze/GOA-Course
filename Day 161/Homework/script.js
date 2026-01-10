// 1. Use for of to console.log each number in an array multiplied by three.

const arr1 = [1,2,3,4,5,6,7,8,9,10] 

for (const num of arr1) {
    console.log(num * 3)
}

// 2. Use reduce to console.log the product of all numbers in an array.


const numbers2 = [2, 3, 4, 5];

const product = numbers2.reduce((accumulator, current) => {
    return accumulator * current;
}, 1)

console.log(product); 

// 3. Use map to create a new array where each number is squared and console.log the new array.

const arr2 = [1,2,3,4,5,6,7,8,9,10]
const newArr2 = []
arr2.map(arr => {
    newArr2.push(arr * arr)
})

// 4. Use filter to create a new array containing only even numbers and console.log it.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers)

// 5. Use a for loop to console.log all numbers from 1 to 20.


for (let i = 0 ; i < 20 ; i ++) {
    console.log(i)
}


// 6. Use for of to loop through an array of words and console.log only the words that start with a vowel.

const words = ["apple", "banana", "pineapple", "water", "appleJuice", "grape"]
const vowels = "aeiouAEIOU"

for (const word of words) { 
    if (vowels.includes(word[0])) { 
        console.log(word)
    }
}
// 7. Use reduce to console.log the longest word in an array of strings.

const words2 = ["apple", "banana", "pineapple", "water", "grape"]

const longestWord = words2.reduce((longest, current) => {
    return current.length > longest.length ? current : longest
}, "")

console.log(longestWord)


// 8. Use map to add the string "!" at the end of each word in an array and console.log the new array.

const words3 = ["apple", "banana", "pineapple", "water", "grape"]
const newWords = []
words3.map(word => {
   newWords.push(`${word}!`)
})
console.log(newWords)

// 9. Use filter to remove all numbers less than 10 from an array and console.log the result.

const numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
numbers1.filter(num => {
    if (num > 10) {
        console.log(num)
    }
})


// 10. Use a for loop to calculate the sum of numbers from 1 to 50 and console.log the sum.


let sum = 0;


for (let i = 1; i <= 50; i++) {
    sum += i; 
}

console.log(sum)
