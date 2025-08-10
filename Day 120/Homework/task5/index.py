# 6) დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების წინ დაბეჭდავს "ფუნქცია დაიწყო" და დასრულების შემდეგ "ფუნქცია დასრულდა"


def decorator_function(function):



    def wrapper():
        print("start")
        function()
        print("end")
    return wrapper

@decorator_function

def greet(name):
    print(f"hello {name}")
greet("saba")
