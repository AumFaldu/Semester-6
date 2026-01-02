#!/bin/bash
read -p "Enter first number: " a
read -p "Enter second number: " b
if [[ $a -eq $b ]]
then
    echo "Equal"
fi
if [[ $a -ne $b ]]
then
    echo "Not Equal"
fi