# 6) შექმენით ფუნქცია, რომელიც მიიღებს ერთ რიცხვს.
#  თუ რიცხვი უარყოფითია, გამოიყენეთ "raise ValueError"
#  შესაბამისი შეტყობინებით, მაგალითად: "რიცხვი არ შეიძლება იყოს უარყოფითი"


num = -1

if num < 0:
    raise ValueError("thre was value error")
else:
    print("there was no Errors")