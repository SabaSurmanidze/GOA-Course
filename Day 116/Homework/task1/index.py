# 2) სცადეთ რიცხვი გაყვოთ ნულზე. გამოიყენეთ "try" და "except" 
# რათა თავიდან აიცილოთ შეცდომა და დაბეჭდოთ „ნულზე გაყოფა არ შეიძლება“

try:
    print(10 / 0)
except ZeroDivisionError:
    print("you can't devide by zero")
else:
    print("threre are no errors")
finally:
    print("checking error in done")