#!/bin/bash
echo "Enter a number"
read n
if [[ $((n%5)) -eq 0 ]]
then
    echo "Is Divisible by 5"
else
    echo "Not Divisible by 5"
fi