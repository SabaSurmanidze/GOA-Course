# 3) შექმენით MathUtil კლასი რომელშიც არ გვჭირდება ობიექტის შექმნა. დაამატეთ 
# staticmethod add(a, b) რომელიც დააბრუნებს a+b-ს და staticmethod multiply(a, b)
# რომელიც დააბრუნებს a*b-ს. გამოიძახეთ ეს მეთოდები ობიექტის გარეშე. კომენტარებით
# ახსენით რას ემსახურება staticmethod



class MathUtil:
    @staticmethod
    def add(a, b):
        return a + b

    @staticmethod
    def multiply(a, b):
        return a * b

print(MathUtil.add(5, 7))      
print(MathUtil.multiply(3, 4))  
