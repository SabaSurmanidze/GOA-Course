// 1. Find the first string in an array that starts with the letter "A".

const fruits = ["Banana", "Apple", "Apricot"];
let result = []

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i][0] === "A") {
    result = fruits[i]; 
  }
}


// 2. Find the first object in an array of users whose age is over 30.
const users = {
    saba: 14,
    gela: 30,
    imeda: 45,
    merabi: 75,
};

for (let name in users) {
    if (users[name] > 30) {
        console.log(name, users[name]);
    }
}


// 3. Find the first word in an array that has more than 5 characters.

const words = ["apple", "kiwi", "banana", "cherry"];
let foundWord = ""

for (const word of words) {
  if (word.length > 5) {
    foundWord = word
  }
}


// 4. Find the first product in an array of objects where the price is less than 20.
const products = {
    phone: 2000,
    cola: 5,
    fanta: 3,
    pc: 3000
}

for (let product in products) {
    if (products[product] > 30) {
        console.log(product, products[name]);
    }
}


// 5. Find the first student object in an array whose grade is "A".

const students = [
    { name: "Saba", grade: "B" },
    { name: "Gela", grade: "A" },
    { name: "Imeda", grade: "C" },
    { name: "Merabi", grade: "A" }
];

const topStudent = students.find(student => student.grade === "A")

console.log(topStudent) 

// 6. Find the index of the first number in an array that is less than 0.

const numbers = [10, 5, -3, 8, -1]

const index = numbers.findIndex(num => num < 0)

console.log(index)


// 7. Find the index of the first string in an array that ends with "ing".

const words2 = ["play", "run", "jumping", "eat", "singing"];

const index2 = words2.findIndex(word => word.endsWith("ing"));

console.log(index2)


// 8. Find the index of the first object in an array of users whose isActive property is true.

const users2 = [
    { name: "Saba", isActive: false },
    { name: "Gela", isActive: true },
    { name: "Imeda", isActive: true }
];

const index3 = users2.findIndex(user => user.isActive);

console.log(index3);


// 9. Find the index of the first element in an array of numbers that is a multiple of 10.

const numbers2 = [7, 14, 30, 45, 50];

const index4 = numbers.findIndex(num => num % 10 === 0);

console.log(index4); 


// 10. Find the index of the first fruit name in an array that has exactly 5 letters.

const fruits2 = ["banana", "kiwi", "apple", "mango", "pear"]

const index5 = fruits2.findIndex(fruit => fruit.length === 5)

console.log(index5)



// 11. Find the last number in an array that is greater than 100.

const numbers3 = [50, 120, 80, 200, 90]

const lastLargeNum = numbers.findLast(num => num > 100)

console.log(lastLargeNum)


// 12. Find the last string in an array that contains the letter "e".

const names = ["saba" , "luka" , "sandro" , "giorgi" , "elene"]
const lastString = numbers.findLast(name => name == "e")
console.log(lastString)


// 13. Find the last object in an array of users whose age is under 25.

const users3 = [
    { name: "Saba", age: 19 },
    { name: "Gela", age: 30 },
    { name: "Imeda", age: 22 },
    { name: "Merabi", age: 45 }
];

const lastYoungUser = users3.findLast(user => user.age < 25)

console.log(lastYoungUser)


// 14. Find the last element in an array of numbers that is odd.

const numbers4 = [2, 4, 7, 8, 11, 14];

// num % 2 !== 0 handles both positive and negative odd numbers


const lastOdd = numbers4.findLast(num => num % 2 !== 0)

console.log(lastOdd)


// 15. Find the last word in an array that starts with a vowel.

const words3 = ["apple", "banana", "orange", "kiwi", "egg"]

const lastVowelWord = words3.findLast(word => /^[aeiou]/i.test(word))

console.log(lastVowelWord)


// 16. Find the index of the last number in an array that is greater than 50.

const numbers5 = [20, 60, 30, 80, 40]

const index6 = numbers5.findLastIndex(num => num > 50)

console.log(index6)


// 17. Find the index of the last string in an array that starts with "S".

const names3 = ["Saba", "Gela", "Salome", "Imeda", "Sandro"]

const index7 = names3.findLastIndex(name => name.startsWith("S"))

console.log(index7)


// 18. Find the index of the last object in an array of users whose isActive property is true.

const users4 = [
    { name: "Saba", isActive: true },
    { name: "Gela", isActive: false },
    { name: "Salome", isActive: true },
    { name: "Imeda", isActive: false }
];

const lastActiveIndex = users4.findLastIndex(user => user.isActive)

console.log(lastActiveIndex)

// 19. Find the index of the last element in an array of numbers that is divisible by 3.

const numbers6 = [10, 6, 14, 9, 20]

const index8 = numbers6.findLastIndex(num => num % 3 === 0)

console.log(index8) 

// 20. Find the index of the last word in an array that has exactly 4 letters.

const words4 = ["apple", "kiwi", "pear", "banana"];

const index9 = words4.findLastIndex(word => word.length === 4);

console.log(index9)

// 21. Find the index of the number 25 in an array of numbers.

const numbers7 = [10, 20, 25, 30, 25, 40]

const index20 = numbers7.indexOf(25)

console.log(index20)

// 22. Find the index of the string "apple" in an array of fruits.

const fruits3 = ["banana", "orange", "apple", "mango"]

const index11 = fruits3.indexOf("apple")

console.log(index11)

// 23. Find the index of the first occurrence of "a" in an array of letters.

const letters = ["c", "b", "a", "d", "a"]

const index12 = letters.indexOf("a")

console.log(index12)


// 24. Find the index of the element "cat" in an array of animals.
const animals = ["cat" , "dog" , "lion" , "camel" , "turtle"]

const index13 = animals.indexOf("cat")

console.log(index13)


// 25. Find the index of the number 100 in an array (where it may not exist).


const numbers8 = [10, 20, 30, 40] 

const index14 = numbers8.indexOf(100)

if (index14 !== -1) {
    console.log(`Found 100 at index: ${index14}`)
} else {
    console.log("100 is not in the array.")
}

console.log(index14)



// 26. Find the last index of the number 10 in an array of numbers.


const numbers9 = [10, 5, 20, 10, 30]

const lastIndex = numbers9.lastIndexOf(10)

console.log(lastIndex)



// 27. Find the last index of the string "apple" in an array of fruits.

const fruits4 = ["apple", "banana", "orange", "apple", "mango"]

const lastIndex2 = fruits4.lastIndexOf("apple")

console.log(lastIndex2)

// 28. Find the last index of the letter "a" in an array of characters.


const letters2 = ["a", "b", "c", "a", "d"]

const lastIndex3 = letters2.lastIndexOf("a")

console.log(lastIndex3)


// 29. Find the last index of "dog" in an array of animals.

const animals2 = ["dog", "cat", "bird", "dog", "rabbit"]

const lastIndex4 = animals2.lastIndexOf("dog")

console.log(lastIndex4)


// 30. Find the last index of the number 0 in an array containing positive and negative numbers.

const numbers10 = [5, 0, -2, 10, 0, -8]

const lastIndex5 = numbers10.lastIndexOf(0)

console.log(lastIndex5)

// 31. Use pop to remove the last number from an array and log the removed value.


const numbers12 = [10, 20, 30, 40]


const removedValue = numbers12.pop()

console.log(removedValue)
console.log(numbers)


// 32. Use pop to remove the last fruit name from an array of strings.

const fruits5 = ["apple", "banana", "cherry"];

const removedFruit = fruits5.pop();

console.log(removedFruit)
console.log(fruits5)


// 33. Continuously pop elements from an array until it becomes empty.

const numbers13 = [1, 2, 3, 4, 5]

while (numbers13.length > 0) {
    const removedElement = numbers13.pop()
    console.log(`Removed: ${removedElement}`)
}

console.log("Array is now empty:", numbers)


// 34. Use pop to remove the last object from an array of users.

const users5 = [
    { name: "Saba", id: 1 },
    { name: "Gela", id: 2 },
    { name: "Imeda", id: 3 }
];


const removedUser = users5.pop()

console.log(removedUser)


// 35. Use pop to remove the last element from an array and store it in another variable.

const numbers14 = [1, 2, 3, 4, 5];


const lastItem = numbers14.pop();

console.log(lastItem)
console.log(numbers14)

// 36. Use splice to remove the first 2 elements from an array.

const colors = ["red", "green", "blue", "yellow", "purple"]


const removedItems = colors.splice(0, 2)

console.log(colors)
console.log(removedItems)


// 37. Use splice to insert "orange" and "grape" into an array at index 2.

const fruits6 = ["apple", "banana", "cherry"]


fruits6.splice(2, 0, "orange", "grape")

console.log(fruits6)

// 38. Use splice to replace the element at index 3 with "mango".

const fruits7 = ["apple", "banana", "cherry", "pear", "kiwi"]

fruits7.splice(3, 1, "mango")

console.log(fruits7)


// 39. Use splice to remove the last 3 elements of an array.
const numbers15 = [10, 20, 30, 40, 50, 60]


const removedItems2 = numbers15.splice(-3)

console.log(numbers15)
console.log(removedItems2)

// 40. Use splice to insert a number into the middle of an array without deleting anything.

const numbers16 = [1, 2, 4, 5];


const middleIndex = Math.floor(numbers16.length / 2)


numbers16.splice(middleIndex, 0, 3)

console.log(numbers16)