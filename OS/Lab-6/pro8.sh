#!/bin/bash
read -p "Enter first number: " a
read -p "Enter second number: " b
if [[ $a -eq $b ]]
then
    echo "Equal"
else
    echo "Not Equal"
fi