#!/bin/bash
echo "Enter age"
read age
if [[ $age -gt 18 ]]
then
    echo "Eligible to vote"
fi
if [[ $age -le 18 ]]
then
    echo "Not eligible to vote"
fi