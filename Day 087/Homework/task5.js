// 5. შექმენით პროგრამა, ცვლადში შეინახეთ random რიცხვი 1-დან 50-მდე. შემდეგ, while loop-ის
//  გამოყენებით, სთხოვეთ მომხმარებელს გამოიცნოს რიცხვი prompt()-ის გამოყენებით. ყოველი 
// გამოცნობის შემდეგ, აჩვენეთ შეტყობინება alert()-ის გამოყენებით, რომელიც ეუბნება მომხმარებელს,
//  მათი ვარაუდი რეალურზე მეტია, ნაკლები, თუ ტოლი. პროგრამამ უნდა გააგრძელოს ციკლი მანამ,
//  სანამ მომხმარებელი არ გამოიცნობს სწორ რიცხვს.


let random = 25
let user = Number(prompt("Guess The Number:"))
let Try = 0

while (user != random) {
    Try ++
    if (user > random) {
        alert("Enter smaller Number")
    }
    else if (user < random) {
        alert("Enter Bigger Number")
    }
    user = Number(prompt("Try again:"))
}

alert('congratulations you guess the secret number in ' +  Try + " Tries")