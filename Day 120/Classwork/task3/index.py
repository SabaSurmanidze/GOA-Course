# # 3) შექმენით decorator ფუნქცია სახელად decorator_function 
# რომელიც არგუმეტნად ღებულობს ფუქქციას, შედმეგ ქმნის wrapper
#  ფუნქციას რომელიც არგუმენტებასდ იღებს *args, შემდეგ wrapper
#   ფუნქციაში ბეჭდავს "Before function execution" იძახებს მიღებულ
#    ფუნქციის არუგმენტს თავისთავად args არგუმენტით და იანხავს
#     val ცვლადში decorator_function-იდან და შემდეგ ბეჭდავს 
#     "After function execution" შემდეგ ბრუნდება val ცვლადი 
#     და ბოლოს decorator_name ფუნქცია აბრუნებს wrapper-ს.
#      შემდეგ შექმენით greeting ფუნქცია რომელიც ღებულოს 
#      სახელს და ბეჭდავს "Greetings <name> შემდეგ decorator
#       ფუნქცია გამოიძახეთ ამ greeting-ს ფუნქციაზე და გადაეცით
#        თქვენი სახელი. ახსენით რა არის decorator ფუნქცია





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

# decorator ფუნქციებს შეუძლიათ სხვა ფუნქციების მიღება არგუმენტებად და მათი დარეთარნება