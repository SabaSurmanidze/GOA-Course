# 1) შექმენით person dictioanry, რომელშიც იქნება მინმიუმ 5 
# წყვილი (სახელი, ჰობი, აკადემია) ახსენით როგორი მონცამეთა 
# ტიპი dictionary და გამოიყენეთ მეთოდები


# clear()
# copy()
# get()
# items()
# keys()
# values()
# pop()
# popitem()
# update()



person = {
    "name": "saba",
    "surname": "surmanidze",
    "age": 14,
    "academy": "goa",
    "hobby": "proggraming"
}

print(person.copy())
person.clear()
print(person.keys())
print(person.values())
print(person.pop())
print(person.popitem("age"))
print(person.items())
print(person.get("name"))



