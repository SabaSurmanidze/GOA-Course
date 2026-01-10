# 2) შექმილ კლასებს დაამტეთ 2 თქვენთვის 2
#  კუთვნილება: _birth_year, __id. Protected 
# და Private. წამოიღეთ ორივე (გამოიყენეთ name mangling)
#  და ახსენით მათი დანიშნულება


class Person:
    def __init__(self, name, surname, age, work, birth_year, id_number):
        self.name = name
        self.surname = surname
        self.age = age
        self.work = work

        self._birth_year = birth_year

        self.__id = id_number

    def working(self):
        print(f"{self.name} working at {self.work}")

    def get_id(self):
        return self.__id


class Student(Person):
    def __init__(self, name, surname, age, work, birth_year, id_number, year):
        super().__init__(name, surname, age, work, birth_year, id_number)
        self.year = year

    def studying(self):
        print(f"{self.name} is studying in year {self.year}")

    def birth_year(self):
        return self._birth_year



student1 = Student("Saba", "Surmanidze", 14, "Programist", 2011, 12345, 2)


print(student1.show_birth_year())   
print(student1.get_id())  