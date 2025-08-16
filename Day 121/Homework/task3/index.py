# 3) შევქმნათ Animal class  და გავაერთიანოთ Human და Cat







class Human:
        def __init__(self , name , surname , age):
            self.name = name
            self.surname = surname
            self.age = age
class Cat:
        def __init__(self, name , age):
            self.name = name
            self.age = age


person = Human("saba" , "surmanidze" , 14)
cat = Cat("kit" , 3)

print(person)
print(cat)
            
class Animal:
    def __init__(self , kind , name  , age):
        self.kind = kind
        self.name = name
        self.age = age

jhon = Animal("mammal" , "Human" , 5)
parrot = Animal("bird" , "maqau" , 3)



        