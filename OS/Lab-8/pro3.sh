#!/bin/bash
read -p "Enter 3 numbers with space separated : " a b c
if [[ $a -gt $b ]]
then
    if [[ $a -gt $c ]]
    then
        echo "$a is the largest"
    else
        echo "$c is the largest"
    fi
else
    if [[ $b -gt $c ]]
    then
        echo "$b is the largest"
    else
        echo "$c is the largest"
    fi
fi