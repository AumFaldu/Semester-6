#!/bin/bash
echo "Enter a number"
read n
if [[ $((n%5)) -eq 0 ]]
then
    echo "Is Divisible by 5"
fi
if [[ $((n%5)) -ne 0 ]]
then
    echo "Not Divisible by 5"
fi