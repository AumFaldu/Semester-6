#!/bin/bash

read -p "Enter a number : " num
if [[ $num -ge 0 ]]
then
    if [[ $((num%2)) -eq 0 ]]
    then
        echo "$num is even"
    else
        echo "$num is odd"
    fi 
else
    echo "$num is Negative"
fi