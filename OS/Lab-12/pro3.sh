#!/bin/bash

read -p "Enter a date (dd-mm-yyyy): " input_date

d=$(echo $input_date | cut -d'-' -f1)
m=$(echo $input_date | cut -d'-' -f2)
y=$(echo $input_date | cut -d'-' -f3)

if [ -z "$d" ] || [ -z "$m" ] || [ -z "$y" ]; then
    echo "Invalid date format! Use dd-mm-yyyy."
    exit 1
fi


if ! [[ $d =~ ^[0-9]+$ ]] || ! [[ $m =~ ^[0-9]+$ ]] || ! [[ $y =~ ^[0-9]+$ ]]; then
    echo "Invalid date format! Use numbers only."
    exit 1
fi
case $m in
    01|03|05|07|08|10|12) dy=31 ;;
    04|06|09|11) dy=30 ;;
    02)
        if [ $((y % 4)) -eq 0 ] && [ $((y % 100)) -ne 0 ] || [ $((y % 400)) -eq 0 ]; then
            dy=29
        else
            dy=28
        fi
        ;;
    *) echo "Invalid month"; exit 1 ;;
esac

if [ $d -ge 1 ] && [ $d -le $dy ]; then
    echo "Entered date $input_date is valid."
else
    echo "Entered date $input_date is invalid."
fi