#!/bin/bash
read -p "Enter value of n : " n
i=1
sum=0
avg=0
while [ $i -le $n ];
do
    sum=$((sum+i))
    i=$((i+1))
done
avg=$(echo "scale=2; $sum / $n" | bc)
echo "Sum = $sum,Avg = $avg"