// შექმენი საიტი, რომელიც მომხმარებლის prompt-ში შეყვანილი ასაკის მიხედვით განსაზღვრავს ბილეთის ფასს:

// წესები:
// თუ ასაკი ნაკლებია 6 წელზე → ბილეთი უფასოა.
// თუ ასაკი 6-დან 17 წლამდეა → ბილეთის ფასი არის 5 ლარი.
// თუ ასაკი 18-დან 64 წლამდეა → ბილეთის ფასი არის 10 ლარი.
// თუ ასაკი 65-ზე მეტია → ბილეთის ფასი არის 7 ლარი.
// თუ შეყვანილია არასწორი ასაკი (ნაკლებია ნულზე ან არაა რიცხვი) → დაბეჭდე: "გთხოვთ, შეიყვანეთ სწორი ასაკი.

let age = Number(prompt("Enter your age:"));


  if (age < 6 , age > 0) {
    alert("ticket is free");
  } else if ((age > 6, age <= 17)) {
    alert("ticket cost 5 dollar");
  } else if ((age > 18, age <= 64)) {
    alert("ticket cost 10 dollar");
  } else if (age > 65) {
    alert("ticket cost 7 dollar");
  } else{
    alert("type right age");
  }

