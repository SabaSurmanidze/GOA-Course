def negative_age(age):
    try:
        if age > 0:
            print("no error detected")
    except:
        raise ValueError
negative_age(-10)
