# 2) შექმენით ფუნქცია welcome_guests რომელიც მიიღებს 3 პარამეტრს:

# 1. name
# 2. *guests (args)
# 3. **person (kwrags)

# პირველ არგუმენტს დაუბეჭდეთ განსხვავებული special მისალმება, მეორე არგუმენტს გადუარეთ
#  for ციკლით და ერთნაირად უბრალოდ მიესალმეთ, ხოლო საბოლოოდ დაბეჭდეთ person არგუმენტი.
#   კომენტარებით ახსენით რა არის *args და რა არის **kwargs



def welcome_guests(name, *guests, **person):
    


    print(f"Hello {name}")

   
    for guest in guests:
        print(f"Welcome {guest}!\")


    print(person)


welcome_guests("luka", "nika", "saba", age=14, city="batumi")



    # arg* გადასცემს იმდენ არგუმენტს რამდენსაც მივუთითებთ როცა ფუნქციას გამოვიძახემთ
    
    # kvarg** გადასცემს ფუნქცია   key-ს და ჩვენ შემდეგ ვანიჭებთ მნიშვნელობას
