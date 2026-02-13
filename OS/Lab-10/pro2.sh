#!/bin/bash
read -p "Enter number: " n

flag=0
for ((i=2;i<=n/2;i++))
do
    if (( n%i == 0 ))
    then
        flag=1
        break
    fi
done

if (( n <= 1 ))
then
    echo "Not Prime"
elif (( flag == 0 ))
then
    echo "Prime"
else
    echo "Not Prime"
fi
