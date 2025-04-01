from operator import *
from re import M

num = input("Enter a number >>")
num = int(num)

hexEASY = hex(num)

quot = 2

while quot != 0:
    m = mod(num,16)
    num = num - m
    
    quot = quot - 1

print(hexEASY)