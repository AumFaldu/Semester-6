#!/bin/bash
read -p "Enter value of n : " n

temp=$n
rev=0

while [ $temp -gt 0 ]
do
    digit=$((temp%10))
    rev=$((rev*10+digit))
    temp=$((temp/10))
done

if [ $n -eq $rev ]
then
    echo "Palindrome number"
else
    echo "Not a palindrome number"
fi