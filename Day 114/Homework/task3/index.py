# 4) შექმენით სიები fruits, colors, numbers. თითოეულზე გამოიყენეთ 
# index, count, sort, sorted, min, max მეთოდები & ფუნქციები და დააკომენტარეთ 
# თითოეული მაგალითი (რას აკეთებს)

list = ["apple" , "banana" , "pinnaple" , "watermelon" , "melon" , "apple"]
colors = ["black" , "red" , "yellow" , "purple" , "pink"]
numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,  10 , 8]


list.index("pinnaple")
colors.index("red")
numbers.index(10)

# გამოაქვს ელემენტის ინდექსი


list.count("apple")
colors.count("yellow")
numbers.count(8)

# თვლის დუბლიკატ ელემენტებს

print(sorted(list))
print(sorted(colors))

# სორტავს ელემენტებს ანბანის მიხედვით

print(max(list))
print(max(colors))
print(max(numbers))

# გამოაქვს ყველაზე დიდი ელემენტი

print(min(list))
print(min(colors))
print(min(numbers))

# გამოაქვს ყველაზე პატარა ელემენტი