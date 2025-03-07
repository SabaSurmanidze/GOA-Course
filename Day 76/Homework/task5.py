# 5. Create a function that finds the longest word in a sentence. (მოიძიეთ ინფრომაცია split()-ზე.



sentence = "finding longest word"
lon = sentence.split()
print(max(lon , key=len))