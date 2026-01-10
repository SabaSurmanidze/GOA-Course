# 2) შექმენით BankAccount კლასი რომელსაც ექნება _balance
#  (private attribute). დაამატეთ მეთოდი deposit(amount) 
#  რომელიც გაზრდის ბალანსს და withdraw(amount) რომელიც
#   შეამცირებს ბალანსს თუ საკმარისი თანხაა. ასევე დაამატეთ
#    მეთოდი get_balance() რომელიც დააბრუნებს ბალანსს.
#     შექმენით ობიექტი, ჩარიცხეთ და 
# გამოიტანეთ თანხა და დაბეჭდეთ შედეგი. 
# კომენტარებით ახსენით რა არის data hiding



class BankAcount:
    def __init__(self , deposit , withdraw , GetBalance , balance):
        self.deposit = deposit
        self.withdraw = withdraw
        self.GetBalance = GetBalance
        self._balance = balance

    def Getbalance(self):
        return self._balance
    def Withdraw(self):
        print(f"you withdraw {self.withdraw}")
    def Deposit(self):
        print(f"you deposited {self.deposit}")



bank = BankAcount(200 , 100 , 500 , 500)

bank.Withdraw()
bank.Deposit()