#!/bin/bash
hour=$(date +%H)
min=$(date +%M)
sec=$(date +%S)
ampm="a.m."

if [ $hour -ge 12 ]; then
    ampm="p.m."
    [ $hour -gt 12 ] && hour=$((hour-12))
fi
[ $hour -eq 0 ] && hour=12
if [ $hour -lt 12 ]; then
    greet="Good Morning"
elif [ $hour -lt 17 ]; then
    greet="Good Afternoon"
else
    greet="Good Evening"
fi

echo "$greet! Current date: $(date +'%d-%m-%Y'), Time: $hour:$min:$sec $ampm"