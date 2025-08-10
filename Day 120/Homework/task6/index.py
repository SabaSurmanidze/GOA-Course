# 7) დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების დროს დაითვლის რამდენი წამი მუშაობდა ფუნქცია

def decorator(func):
    def wrapper(*args, **kwargs):
        time = __import__('time') 
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} function works {end - start:6f} second")
        return result
    return wrapper

@decorator
def test():
    time = __import__('time')
    time.sleep(1)

test()
