# 7) შექმენით კოდი, სადაც გამოიყენებთ "try", "except" და "finally".
#  მაგალითად, გახსენით ფაილი, წაიკითხეთ შიგთავსი, და გამოიყენეთ 
# "finally", რომ ყოველთვის დაიხუროს ფაილი მიუხედავად იმისა მოხდა
#  თუ არა შეცდომა


list = [1,2,3,4,5]
index = 10
try:
    print(list[index])
except IndexError:
    print(f"index {index} has not been detected ")
else:
    print("there was no errors")
finally:
    print("checking errors in done")
