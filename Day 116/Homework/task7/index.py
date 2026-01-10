# 8) შექმენით ციკლი, რომელიც სთხოვს მომხმარებელს შეიყვანოს
#  რიცხვი მანამ სანამ სწორად არ შეიყვანს. გამოიყენეთ "try" და "except",
#  რომ თავიდან აიცილოთ შეცდომა, და დაბეჭდეთ შეტყობინება არასწორი შეყვანისას


user = int(input("guess the number"))
number =  10
try:
    if user == 10:
        print("you guessed the number")
    else:
        print("try again")
        user = int(input("guess the number"))
except:
    print("thre was some errors try again")
    user = int(input("guess the number"))