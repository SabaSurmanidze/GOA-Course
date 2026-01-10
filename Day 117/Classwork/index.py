file = open("text.txt" , "rt")
print(file.read())
print(file.readline())

for i in file:
    print(i)