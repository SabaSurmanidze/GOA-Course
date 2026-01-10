# 1) მოცემული სია დაალაგეთ tuple-ის პირველი წევრის ზრდადობით,
#  გამოიყენეთ sorted და მას მეორე key არგუმენტად გადაეცით lambda ფუნქცია.




data = [(2, "c", "hello"), (1, "a", "world"), (3, "b", "hi")]

sorted_data = sorted(data, key=lambda i: i[0])
print(sorted_data)
