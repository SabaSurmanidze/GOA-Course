# # 2) ფუქნცია greeting დავამატოთ Human კლასში
#   1) __str__ ფუნქციაც დავამატოთ
#   2) ცალკე ფოლდერი შევქმნათ და დავაიმპორტოთ ეს ჩვენი Human  კლასი
#   3) საბოლოოდ გამოვიძახოთ



class Human:
    def __init__(self , name , last_name , age):
        self.name = name
        self.last_name = last_name
        self.age = age
    def __str__(self):
        return f" welcome {self.name} "
