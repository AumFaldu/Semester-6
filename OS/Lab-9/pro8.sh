#!/bin/bash
read -p "Enter value of n : " n

i=1
echo "Multiplication Table:"
while [ $i -le 10 ]
do
    ans=$((n*i))
    echo "$n x $i = $ans"
    i=$((i+1))
done