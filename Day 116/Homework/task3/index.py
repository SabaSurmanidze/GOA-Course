# 4) სთხოვეთ მომხმარებელს შეიყვანოს რიცხვი "input()"-ით და გადააკეთეთ 
# "int"-ად. გამოიყენეთ "try" და "except", რომ გაუმკლავდეთ შეცდომას თუკი
#  სიმბოლოები შეიყვანეს. დაბეჭდეთ „შეიყვანეთ მხოლოდ რიცხვი“


user = int(input("enter number"))

try:
    if user == int:
        print("there are no errors")
except TypeError:
    print("type error has been detected")