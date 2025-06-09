# 2. შექმენით პროგრამა, სადაც მომხმარებელს შეატანინებთ რიცხვს 5-ჯერ, დაამატებთ მათ სიაში და დაბეჭდავთ შებრუნებულ სიას.

user = int(input("enter number:"))
new_list = []

for i in range(user , 0 , -1):
    new_list.append(i)
print(new_list)




