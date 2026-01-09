#!/bin/bash
echo "Enter first number"
read a
echo "Enter second number"
read b
if [ $a -le $b ]
then
    echo "Maximum = $b"
else
    echo "Maximum = $a"
fi