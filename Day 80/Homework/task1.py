# შექმენით პროექტი, სადაც ეცდებით გამოიცნოთ თქვენივე არჩეული საიდუმლო რიცხვი:

# შექმენით ფუნქციები: დაალაგოთ თქვენი კოდი ფუნქციების გამოყენებით.
# გამოიყენოთ ციკლები და პირობები: გამოიყენეთ while ციკლი, რომ გააგრძელოთ თამაში სანამ სწორ რიცხვს 
# გამოიცნობთ. გამოიყენეთ if პირობა, რომ შეამოწმოთ, სწორია თუ არა გამოცნობილი რიცხვი.
# ყოველი გამოცნობის შემდეგ თქვენ უნდა უთხრათ მომხარებელს, მათი გმოცნობილი საიდუმლო
# რიცხვზე უფრო მაღალია თუ დაბალი.



number = 10
user = int(input("guess the secret number"))

if user == number:
   print("you guess the number")
elif user < 10:
   print("secret number is higher")
elif user > 10:
    print("secret number is lower")
