# 2. Create a function that counts how many vowels are in a word, ignoring case.

word = "proggraming"
a = 0
e = 0
i = 0
o = 0
u = 0
for vowel in word:
    if vowel == "a":
       a += 1
    elif vowel == "e":
        e += 1
    elif vowel == "i":
        i += 1
    elif vowel == "o":
        o += 1
    elif vowel == "u":
        u += 1

print(a , e , i , o , u)
