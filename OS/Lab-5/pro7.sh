#!/bin/bash
echo "Enter year"
read year
if [[ $((year%4)) -eq 0 ]]
then
    echo "Leap Year"
fi
if [[ $((year%4)) -ne 0 ]]
then
    echo "Not Leap Year"
fi