#!/bin/bash

read -p "Enter 2 integers with space : " a b

if [[ $a -eq $b ]]
then
    echo "Both are Equal"
else
    if [[ $a -gt $b ]]
    then
        echo "$a is greater"
        if [[ $((a%5)) -eq 0 && $((a%7)) -eq 0 ]]
        then
            echo "$a is divisible by 5 and 7 both"
        elif [[ $((a%5)) -eq 0 ]]
        then
            echo "$a is divisible by 5"
        elif [[ $((a%7)) -eq 0 ]]
        then
            echo "$a is divisible by 7"
        else
            echo "$a is not divisible by 5 nor 7"
        fi
    else
        echo "$b is greater"
        if [[ $((b%5)) -eq 0 && $((b%7)) -eq 0 ]]
        then
            echo "$b is divisible by 5 and 7 both"
        elif [[ $((b%5)) -eq 0 ]]
        then
            echo "$b is divisible by 5"
        elif [[ $((b%7)) -eq 0 ]]
        then
            echo "$b is divisible by 7"
        else
            echo "$b is not divisible by 5 nor 7"
        fi
    fi
fi