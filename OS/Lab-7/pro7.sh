#!/bin/bash

read -p "Enter three sides of triangle: " a b c

if [ $((a + b)) -gt $c ]
then
    if [ $((a + c)) -gt $b ]
    then
        if [ $((b + c)) -gt $a ]
        then
            if [ $a -eq $b ]
            then
                if [ $b -eq $c ]
                then
                    echo "Triangle is Equilateral"
                else
                    echo "Triangle is Isosceles"
                fi
            else
                if [ $a -eq $c ]
                then
                    echo "Triangle is Isosceles"
                else
                    if [ $b -eq $c ]
                    then
                        echo "Triangle is Isosceles"
                    else
                        echo "Triangle is Scalene"
                    fi
                fi
            fi
        else
            echo "Not a valid triangle"
        fi
    else
        echo "Not a valid triangle"
    fi
else
    echo "Not a valid triangle"
fi
