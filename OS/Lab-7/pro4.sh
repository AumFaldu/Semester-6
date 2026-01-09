#!/bin/bash

read -p "Enter Basic Salary: " basic

if [[ $basic -ge 10000 ]] then
    if [[ $basic -ge 30000 ]] then
        da=$((basic * 95 / 100))
        hra=$((basic * 30 / 100 + da))
    else
        if [[ $basic -ge 20000 ]] then
            da=$((basic * 90 / 100))
            hra=$((basic * 25 / 100 + da))
        else
            da=$((basic * 80 / 100))
            hra=$((basic * 20 / 100 + da))
        fi
    fi
    gross=$((basic + da + hra))
    echo "DA           : $da"
    echo "HRA          : $hra"
    echo "Gross Salary : $gross"
else
    echo "Basic salary must be at least 10000"
fi