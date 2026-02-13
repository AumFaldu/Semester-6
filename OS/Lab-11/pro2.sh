#!/bin/bash
read -p "Enter gender (M/F): " gender

case $gender in
M|m) echo "Male" ;;
F|f) echo "Female" ;;
*) echo "Invalid input" ;;
esac
