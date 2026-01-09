#!/bin/bash

read -p "Enter three numbers: " a b c

if [[ $a -ge $b ]] then
    if [[ $a -ge $c ]] then
        echo "$a is the largest number"
    else
        echo "$c is the largest number"
    fi
else
    if [[ $b -ge $c ]] then
        echo "$b is the largest number"
    else
        echo "$c is the largest number"
    fi
fi
