#!/bin/bash

echo "Calculator"
echo "Enter value of first number"
read a
echo "Enter value of second number"
read b
echo "Enter operand"
read op

if [[ $op == "+" ]]
then
    result=`expr $a + $b`
    echo "Result: $result"
fi
if [[ $op = "-" ]]
then
    result=`expr $a - $b`
    echo "Result: $result"
fi
if [[ $op = "/" ]]
then
    result=`expr $a / $b`
    echo "Result: $result"
fi
if [[ $op = "*" ]]
then
    result=`expr $a \* $b`
    echo "Result: $result"
fi