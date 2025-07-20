# 2) შექმენით tuple, რომელშიც შეინახავთ ბოსტნეულს (მინიმუმ 5-ს), შემდეგ 
# გამოიყენეთ ამ tuple-ზე len და sorted ფუნქციები, ასევე tuple-ის გადმობარება 
# "unpacking" გააკეთეთ, ცალ-ცალკე ცვლადებში შეინახეთ tuple-ის პირველი 3 
# ელემენტი, ხოლო დანარჩენი *rest ოპერატორის გამოყენებით ბოლო ცვლადში.
#  კომენტარებით ახსეით როდის ვიყენებთ tuple-ს და დაწერეთ მისი თვისებები.


fruits = ("apple" , "pinnaple" , "banana" , "watermelon" , "melon")

print(len(fruits))
print(sorted(fruits))

fruit1 , fruit2 , fruit3 , *rest = fruits

print(fruit1)
print(fruit2)
print(fruit3)
print(rest)


# tuple-ში შეგვილძლია მრავალი ინფორმაციის შენახვა მაგრამ არ შეგვიძლია მასში ელემენტების დამატება დაამოშლა