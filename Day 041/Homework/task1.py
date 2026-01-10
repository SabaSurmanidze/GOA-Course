# შექმენით ფუნქცია, vending-machine, გექნებათ პროდუქტების სია, მომხმარებელმა, კი უნდა აირჩიოს სასურველი
#  პროდუქტი, თქვენ კი ის უნდა დაუპრინტოთ,

# Bonus:
# თუმცა მომხმარებელს საწყისად უნდა გააჩნდეს რაღაც კონკრეტული თანხა, ხოლო პროდუქტიც რაღაც გაარკეული
#  თანხა უნდა ღირდეს, თუ მომხმარებელს არ ექნება საკმარისი ფული, არ უნდა დაუპრინტოთ შესაბამისი ინდექსის
#  პროდუქტი.


product_list = ["pinnaple","water","banana","chocolate","milk"]

def products(money):
    print(product_list)

    products(100)

product = input("choose product to buy:")


if product == "pinnaple":
    print("it cost 20 dollar")
elif product == "water":
    print("it cost 2 dollar")
elif product == "banana":
    print("it cost 5 dollar")
elif product == "chocolate":
    print("it cost 3 dollar")
elif product == "milk":
    print("it cost 8 dollar")

payment = int(input("enter money to buy item"))

if payment == 20:
    print("you succefully buy a pinnaple")
elif payment == 2:
     print("you succefully buy a water")
elif payment == 5:
    print("you succefully buy a banana")
elif payment == 3:
    print("you succefully buy a chocolate")
elif payment == 8:
    print("you succefully buy a milk")
elif payment < 2:
    print("you dont have enough money")
else:
    print("you entered wrong amount of money")