#!/bin/bash

read -p "Enter marks of 3 subjects with space separated format: " m1 m2 m3

total=$((m1 + m2 + m3))
percentage=$((total / 3))

echo "Total Marks  : $total"
echo "Percentage   : $percentage %"

if [ $percentage -ge 50 ]
then
    if [ $percentage -ge 75 ]
    then
        echo "Class Obtained: Distinction"
    else
        if [ $percentage -ge 60 ]
        then
            echo "First Class"
        else
            echo "Second Class"
        fi
    fi
else
    echo "Fail"
fi
