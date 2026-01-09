#!/bin/bash

read -p "Enter 2 numbers : " a b
if [[ $a -ne $b ]]
then
    if [[ $a -ge $b ]]
    then
        echo "$a is largest"
    else
        echo "$b is largest"
    fi 
else
    echo "Both are equal"
fi