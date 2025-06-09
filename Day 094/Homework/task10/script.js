// 5. შექმენი პროგრამა, რომელიც იღებს რიცხვების სიას და ბეჭდავს მხოლოდ ლუწი რიცხვების ჯამს, for loop-ის გამოყენებით.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}
