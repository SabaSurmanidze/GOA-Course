# 4) შექმენით Animal კლასი რომელსაც ექნება name და მეთოდი sound() რომელიც უბრალოდ დაბეჭდავს
# "Some sound". შექმენით Dog და Cat კლასები რომლებიც მემკვიდრეობით მიიღებენ Animal-ს და
# თავიანთი sound() მეთოდი ექნებათ ("Bark", "Meow"). შექმენით
# ორივეს ობიექტი და გამოიძახეთ sound().
#  კომენტარებით ახსენით როგორ ვლინდება პოლიმორფიზმი


class Animal:
    def __init__(self , name):
        self.name = name
    def Sound(self):
        print("some Sound")
class Dog(Animal):
    def DogSound(self):
        print("wooh")
class Cat(Animal):
    def CatSound(self):
        print("Meow")

Animal.Sound()
Dog.DogSound()
Cat.CatSound()




