# # 3) სიიდან "my_list = [5, 10, 15]" სცადეთ დაბეჭდოთ ელემენტი არარსებულ
# ინდექსზე. გამოიყენეთ "try" და "except" რომ პროგრამა არ გაჩერდეს და 
# გამოჩნდეს შეტყობინება „ინდექსი არასწორია“
my_list = [5, 10, 15]
index = 10

try:
    print(my_list[index])
except IndexError:
    print("indexerror has beeen detected")
else:
    print("there are no Errors")
finally:
    print("checking Errrors in done")