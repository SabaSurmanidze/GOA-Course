# 13) სიიდან "animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']"
#  შექმენით ახალი სია, რომელიც შეიცავს სიტყვების პირველ ასოებს, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ 
# აირჩიეთ მხოლოდ ის სიტყვები, რომლებიც "e"-ზე იწყება


animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']
words = [i[0] for i in animals]
print(words)

for i in animals:
    words.append(i[0])
print(words)