# 3. Create a function that checks if a word is a palindrome. A palindrome
#  is a word that reads the same forward and backward, like 'racecar' or
#  'level', ignoring capitalization.



word = "level"
rev = "".join(reversed(word))


if  word == rev:
    print("this word is palindrome")
else:
    print("word is not palindrome")




