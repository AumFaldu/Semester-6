#!/bin/bash
echo "Enter a number"
read n
if [[ $((n%2)) -eq 0 ]]
then
    echo "EVEN"
else
    echo "ODD"
fi