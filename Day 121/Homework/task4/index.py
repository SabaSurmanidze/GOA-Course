# 4) შევქმანთ Batman კლასი და 2 მეთოდი ჩავუმატოთ



class Batman:
    def __init__(self, name):
        self.name = name

    def fight_crime(self):
        return f"{self.name} is fighting"

    def drive_batmobile(self):
        return f"{self.name} is driving the Batmobile"

bruce = Batman("Bruce Wayne")


print(bruce.fight_crime())    
print(bruce.drive_batmobile()) 
