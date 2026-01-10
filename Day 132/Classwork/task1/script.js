// 1. დააგენერირეთ random ციფრი 1-იდან 100-მდე და გამოიტანეთ კონსოლში (random)
// 2. გამოიყენეთ რამდენიმე რიცხვზე floor() ფუნქცია და დააკვირდით რას აკეთებს.
// 3. დაწერეთ პირობა ჩვეულებრივი conditional-ის გამოყენებით, შემდეგ კი შეამოკლეთ და მიუწერეთ ქვევით მისი ternary ვარიანტი
// 4. შექმენით რიცხვების სია და გამოიყენეთ მასზე შემდეგი ფუნქციები: push, pop, shift, unshift, slice.


let randomNum = Math.floor(Math.random() * 100)
console.log(randomNum)
console.log(Math.floor(1.5))
console.log(Math.floor(2.8))

let random = Math.floor(Math.random() * 10)

if (random > 5 ){
    console.log("numbers is greater than 5")
}else{
    console.log("number is lower than 5")
}

let nums = random > 5 ? "number is greater than 5" : "numbers is lower than 5"

console.log(nums)


let arr1 = [1,2,3,4,5]
arr1.push(6)
console.log(arr1)


let arr2 = [1,2,3,4,5]
arr2.pop()
console.log(arr2)

let arr3 = [1,2,3,4,5]
arr3.shift()
console.log(arr3)

let arr4 = [1,2,3,4,5]
arr4.unshift(0)
console.log(arr4)

let arr5 = [1,2,3,4,5]
console.log(arr5.slice(1,3))

