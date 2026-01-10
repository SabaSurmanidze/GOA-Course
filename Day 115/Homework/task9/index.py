# 10) სიტყვების სიიდან "words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'grapefruit']" 
# შეარჩიეთ მხოლოდ ისინი, რომლების სიგრძე მეტია 5-ზე, ჯერ 
# "for"-ით, შემდეგ list comprehension-ით


words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'grapefruit']
newwords = [i for i in words if len(i) > 5]
print(newwords)


for i in words:
    if len(i) > 5:
        newwords.append(i)
print(newwords)