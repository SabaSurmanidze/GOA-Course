// 3. შექმენით პროგრამა, რომელიც მასივში თითოეულ რიცხვს ამრავლებს 2-ზე და შედეგს ბეჭდავს მათ for ციკლის გამოყენებით.

const nums = [1,10,50,8,50,100,150,22,203]

for (let i = 0; i < nums.length; i++){
    console.log(nums[i * 2])
}
