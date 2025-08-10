# 10) დაწერეთ დეკორატორი, რომელიც ფუნქციის დაბრუნებულ ტექსტს გადააქცევს დიდ ასოებად


def decorator_function(function):


    def wrapper():
        print("start")
        function()
        print("end")
    return wrapper

@decorator_function

def greet(name):
    print(f"hello {name.upper()}")
greet("saba")
