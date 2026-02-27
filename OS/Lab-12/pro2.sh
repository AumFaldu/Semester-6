#!/bin/bash
month=$(date +%m)
year=$(date +%Y)
echo "Calendar for $month/$year"
for day in {1..31}; do
    if date -d "$year-$month-$day" &>/dev/null; then
        printf "%02d " $day
        (( $(date -d "$year-$month-$day" +%u) % 7 == 0 )) && echo
    fi
done
echo