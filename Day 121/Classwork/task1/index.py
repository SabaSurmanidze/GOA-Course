# 1) შევქმანთ კლასი დავარქვათ Human და გადავცეთ 4 არგუმენტი  self, name, surname, age,



class Human:
    def __init__(self , name , surname , age):
        self.name = name
        self.surname = surname
        self.age = age

person = Human("saba" , "surmanidze" , 14)
print(person)