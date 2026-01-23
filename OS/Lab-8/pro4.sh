#!/bin/bash

read -p "Enter 4 numbers (space separated): " a b c d

if [[ $a -ge $b && $a -ge $c && $a -ge $d ]]
then
    echo "$a is the largest"
elif [[ $b -ge $a && $b -ge $c && $b -ge $d ]]
then
    echo "$b is the largest"
elif [[ $c -ge $a && $c -ge $b && $c -ge $d ]]
then
    echo "$c is the largest"
else
    echo "$d is the largest"
fi
