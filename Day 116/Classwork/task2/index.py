# 2) გააკეთეთ 1 error-ის მაგალითი, რომელზეც გამოიყენებთ error handling-ს: try, except, else, finally


list = [1,2,3,4,5]
index = 10
try:
    print(list[index])
except IndexError:
    print(f"index {index} has not been detected ")
else:
    print("there was no errors")
finally:
    print("checking errors in done")

    