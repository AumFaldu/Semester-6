#!/bin/bash
read -p "Enter value of n: " n

count=0

for ((num=2; ; num++))
do
    flag=0

    for ((i=2; i<=num/2; i++))
    do
        if (( num % i == 0 ))
        then
            flag=1
            break
        fi
    done

    if (( flag == 0 ))
    then
        echo -n "$num "
        ((count++))
    fi

    if (( count == n ))
    then
        break
    fi
done

echo
