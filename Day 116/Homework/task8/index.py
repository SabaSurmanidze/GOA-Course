# 9) შექმენით სია რიცხვებით და სცადეთ თითოეული რიცხვი გადააქციოთ
#  float ტიპად. გამოიყენეთ "try" და "except", რათა ტექსტის შემთხვევაშიც
#  კოდი არ გაჩერდეს და უბრალოდ გამოტოვოს შეცდომიანი ელემენტი


nums = [10, '25', 'abc', 3.14, '5.5', 'text', 42]

floats = []
for i in nums:
    try:
        floats.append(float(i))
    except ValueError:
        print("there was valueError detected")

print(floats)
