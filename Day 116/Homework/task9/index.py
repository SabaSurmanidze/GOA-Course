# 10) შექმენით პროგრამა, რომელიც იღებს სია
#  "values = ['10', '20', 'hello', '30']"-ს
#  და თითოეულს ცდის გადააქციოს int ტიპად.
#  შეცდომის შემთხვევაში დაბეჭდეთ „მონაცემი 
# არ არის რიცხვი: ...“ და გააგრძელეთ ციკლი




values = ['10', '20', 'hello', '30']

try:
    print(int(values))
except:
    print("there was some errors")
else:
    print("there was no Errors detected")



