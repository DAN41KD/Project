data = {}

name = input("Ievadī lietotājvārdu: ")
clicks = input("Ievadī klikšķu daudzumu: ")
time = input("Ievadī laiku: ")

with open("name.txt", "a") as f:
    f.write('   {\n      "vards": ' + name + '\n      "klikski": ' 
    + clicks + '\n      "laiks": ' + time + '\n   }\n')
print("Vārds ir saglabāts failā.")