# 1) შექმენით Person კლასი რომელსაც ექნება name, surname, age, work.
#  ასევე აიღეთ მეთოდი working რომელიც დაბეჭდავს "[name] working at
#  [work] შემდეგ შექმენით Student კლასი რომელიც მემკვიდრეობით მიიღებს
#  თვისებებს Person კლასისგან და ექნება თავისი დამატებითი კუთვნილება
#  year და შეცვლილი მეშთოდი working რომელიც უბრალოდ დაბეჭდავს
#  studying. შექმენით ორივე კლასის თითო ობიექტი მაგალისთვის, დაბეჭდდეთ
#  მათი რამდენიმე თვისება და გამოიძახეთ ორივეზე work() მეთოდი.
#  კომენტარებით ახსენით რა არის მემკვიდრეობა და პოლიმორფიზმი"





class Person:
    def __init__(self, name, surname, age, work):
        self.name = name
        self.surname = surname
        self.age = age
        self.work = work

    def working(self):
        print(f"{self.name} working at {self.work}")



class Student(Person):
    def __init__(self, name, surname, age, work, year):
        super().__init__(name, surname, age, work)
        self.year = year


    def working(self):
        print("studying")



p1 = Person("saba", "surmanidze", 14, "Programist")
p2 = Student("nikoloz", "surmanidze", 25, "bank", 2)


print(p1.name, p1.age)     
print(p2.name, p2.year)    


p1.working()   
p2.working()
