#!/bin/bash

read -p "Enter first number: " a
read -p "Enter operator (+ - * /): " op
read -p "Enter second number: " b

case $op in
+) echo "Result = $((a + b))" ;;
-) echo "Result = $((a - b))" ;;
\*) echo "Result = $((a * b))" ;;
/) echo "Result = $((a / b))" ;;
*) echo "Invalid operator" ;;
esac
