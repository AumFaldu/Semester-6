#!/bin/bash
echo "Enter year"
read year
if [[ $((year%4)) -eq 0 ]]
then
    echo "Leap Year"
else
    echo "Not Leap Year"
fi