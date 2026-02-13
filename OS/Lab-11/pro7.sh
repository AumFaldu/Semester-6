#!/bin/bash
read -p "Enter number (1-5): " num

case $num in
1) echo "One" ;;
2) echo "Two" ;;
3) echo "Three" ;;
4) echo "Four" ;;
5) echo "Five" ;;
*) echo "Invalid number" ;;
esac
