# 3) შექმენით ფუნქცია manual_count, რომელიც მიიღებს
#  სიას და ელემენტს და დააბრუნებს ელემენტის რაოდენობას
#  სიაში. გამოიყენეთ მხოლოდ loop და if, .count მეთოდის გარეშე

MyList = ["a", "b", "a", "c", "c", "a", "c"]
count = {}

for i in MyList:
    if not i in count:
         count[i] = 1
    else:
        count[i] +=1
print(count)