# 5) შევმქნათ სპარის მოლარის კლასი და მასში გააერთიანეთ
#  ყველა აქმადე შექმნილი კლასები და Super მეთოდით გამოვიძახოთ ისინი


class animal:
    def __init__(self, name):
        self.name = name
        print(f"Animal init: {self.name}")



class Human(animal):
    def __init__(self, name):
        super().__init__(name)  



class Cat(animal):
    def __init__(self, name):
        super().__init__(name) 
        print(f"Cat init: {self.name}")


class Batman:
    def __init__(self, name):
        self.name = name

    def fight_crime(self):
        return f"{self.name} is fighting 

    def drive_batmobile(self):
        return f"{self.name} is driving the Batmobile"


#
class SuperMolari(Human, Cat, Batman):
    def __init__(self, name):
        super().__init__(name)
        Batman.__init__(self, name)
        print(f"SuperMolari init: {self.name}")



supermolar = SuperMolari("saba")

         
print(supermolar.fight_crime())    
print(supermolar.drive_batmobile())

