# 1) შექმენით სია რომელშიც შეინახავთ სხვადასხვა საგანს, შემდეგ კი ამ სიაზე გამოიყენეთ 
# ჩაშენებული ფუნქციები და მეთოდები. კომენტარებით ახსენით თუ როგორ მუშაობს თითოეული


# .append()
# .insert()
# .pop()
# .sort()
# .min()
# .max()


subjects = ["math" , "PE" , "Hystory" , "geography" ]


print(subjects.append("music"))
print(subjects.insert( 1 ,"art"))
print(subjects.pop())
print(subjects.sort())
print(min(subjects))
print(max(subjects))



#  append ამატებს ელემენტებს სიაში
# insert ამატებს ელემენტებს სიაში განსაზღვულ ადგილას
# pop აგდებს ბოლო ელემენტს სიიდან
# sort ალაგებს ელემენტებს ანბანის მიხედვით
# min-ს გამოაქვს ყველაზე პატარა ელემენტი
# max-ს გამოქვს ყველაზე დიდი ელემენტი