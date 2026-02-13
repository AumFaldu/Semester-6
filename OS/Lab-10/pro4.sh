#!/bin/bash

echo "Enter n:"
read n

a=0
b=1

echo -n "Fibonacci Series: "

for ((i=1; i<=n; i++))
do
    echo -n "$a "
    temp=$((a + b))
    a=$b
    b=$temp
done
