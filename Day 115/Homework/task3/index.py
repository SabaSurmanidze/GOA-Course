# # 4) შექმენით dictionary სახელად student, დაამატეთ მას 
# მონაცემები: name, hobby, height, weight. შემდეგ გამოიყენეთ 
# .get() მეთოდი name-ის მისაღებად და .pop() მეთოდი height-ის
#  წასაშლელად. დაუმატეთ კომენტარები, რას აკეთებს თითოეული მეთოდი


student = {
    "name": "saba",
    "hobby": "proggraming",
    "heihgt": 160,
    "weight": 50
}

student.get("name")
print(student.pop("heihgt"))


# get იღებს რომელიმე ელმენტს სიიდან
# pop შლის ელემენტს სიიდან