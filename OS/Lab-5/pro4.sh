#!/bin/bash
echo "Enter a number"
read n
if [[ $n -ge 0 ]]
then
    echo "POSITIVE"
fi
if [[ $n -lt 0 ]]
then
    echo "NEGATIVE"
fi