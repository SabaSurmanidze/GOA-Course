# 5) შექმენით Product კლასი რომელსაც ექნება სახელი და ფასი, ასევე 
# staticmethod discount(price, percent) რომელიც დააბრუნებს ფასს
# ფასდაკლებით. დაამატეთ Order კლასი რომელსაც ექნება _products
# (private list). Order-ს ექნება მეთოდი add_product(product) და
# show_products() რომელიც დაბეჭდავს ყველა პროდუქტს. დაამატეთ
# Order-ში რამდენიმე პროდუქტი და გამოიყენეთ discount staticmethod 
# ფასის შესამცირებლად. კომენტარებით ახსენით data hiding და staticmethod
# ერთად



class Product:
    def __init__(self, name, price):
        self.name = name      
        self.price = price    

    @staticmethod
    def discount(price, percent):
        return price - (price * percent / 100)


class Order:
    def __init__(self):
        self.__products = []   

    def add_product(self, product):
        self.__products.append(product)

    def show_products(self):
        for p in self.__products:
            print(f"{p.name}: {p.price}$")



p1 = Product("laptop", 5000)
p2 = Product("Phone", 800)
p3 = Product("Headphones", 50)


p1.price = Product.discount(p1.price, 10)  
p3.price = Product.discount(p3.price, 20)  


order = Order()
order.add_product(p1)
order.add_product(p2)
order.add_product(p3)


order.show_products()

