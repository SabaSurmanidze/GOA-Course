// 5. გამოიყენეთ for ციკლი მასივის ყველა ელემენტის შესაჯამებლად და საბოლოო შედეგის დასაბეჭდად.

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);