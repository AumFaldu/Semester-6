#!/bin/bash

read -p "Enter side a: " a
read -p "Enter side b: " b
read -p "Enter side c: " c

if [[ $((a + b)) -gt $c ]]; then
    if [[ $((a + c)) -gt $b ]]; then
        if [[ $((b + c)) -gt $a ]]; then
            echo "Valid Triangle"
        fi
    fi
fi

if [[ ! ( $((a + b)) -gt $c && $((a + c)) -gt $b && $((b + c)) -gt $a ) ]]; then
    echo "Not a Valid Triangle"
fi
