# 8) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და ამატებს ახალ წყვილს
#  ('age': 14) .update() მეთოდით, შემდეგ კი შლის ბოლო ელემენტს .popitem()
#  მეთოდით. დაბეჭდეთ შედეგი და დაუმატეთ კომენტარები
student = {
    "name": "saba",
    "hobby": "proggraming",
    "heihgt": 160,
    "weight": 50
}


newdic = {
    "age": 14
}

student.update(newdic)

student.popitem()
print(student)