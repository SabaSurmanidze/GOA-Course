# 4. შექმენით პროგრამა, რომელიც ახდენს მარტივი სკოლის ჟურნალის სიმულაციას,
# მიიღეთ სტუდენტების სახელები და ქულები input()-ით, დაამატეთ ისინი სიაში და აჩვენეთ
# თითოეული მოსწავლის სახელი მის გვერდზე საშუალო ქულით.



student = input("Enter your name: ")
point1 = int(input("Enter your first point "))
point2 = int(input("Enter your second point "))

print(f"{point1 + point2 // 2} this is your grade {student}")