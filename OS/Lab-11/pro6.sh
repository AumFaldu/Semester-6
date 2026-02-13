#!/bin/bash
read -p "Enter a number: " num

rem=$((num % 2))

case $rem in
0) echo "Even Number" ;;
1) echo "Odd Number" ;;
esac
