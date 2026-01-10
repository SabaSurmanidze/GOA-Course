// 1. Use for of to loop through an array of numbers and console.log() each number multiplied by two.
const nums = [1,2,3,4,5,6,7]
for(const num of nums) {
    console.log(num * 2)
}
// 2. Use reduce to find the sum of all numbers in an array.

const numbers = [5, 10, 15, 20];

const sum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0); 

console.log(sum); 

// 3. Use for of to loop through an array of words and create a new array containing only the words longer than four letters.

const names = ["saba" , "luka" , "nikolozi" , "merabi"]
const newNames = []
for (const name of names) {
    if (name.length > 4) {
        newNames.push(name)
    }
}

console.log(newNames)

// 4. Use reduce to combine an array of strings into a single sentence separated by spaces.

const words = ["JavaScript", "is", "a", "powerful", "language"];

const sentence = words.reduce((accumulator, current, index) => {
    return index === 0 ? current : accumulator + " " + current;
}, "");

console.log(sentence); 


