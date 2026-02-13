#!/bin/bash
read -p "Enter base " x
read -p "Enter power " y

result=1
for ((i=1;i<=y;i++))
do
    result=$((result*x))
done

echo "Answer = $result"
