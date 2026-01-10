# 4) შექმენით ფუნქცია manual_count,
#  რომელიც მიიღებს სიას და ელემენტს
#  და დააბრუნებს ელემენტის რაოდენობას
#  სიაში. გამოიყენეთ მხოლოდ loop და if,
#  .count მეთოდის გარეშე


def manual_count(list, element):
    count = 0
    for i in list:
        if i == element:
            count += 1
    print(count)


my_list = [1, 2, 3, 2, 4, 2]
manual_count(my_list, 2)

