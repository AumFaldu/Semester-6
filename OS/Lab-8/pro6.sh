#!/bin/bash

read -p "Enter total units consumed: " units

bill=0

if [ $units -le 50 ];
then
    bill=$(echo "$units * 0.50" | bc)
elif [ $units -le 150 ];
then
    bill=$(echo "50 * 0.50 + ($units - 50) * 0.75" | bc)
elif [ $units -le 250 ];
then
    bill=$(echo "50 * 0.50 + 100 * 0.75 + ($units - 150) * 1.20" | bc)
else
    bill=$(echo "50 * 0.50 + 100 * 0.75 + 100 * 1.20 + ($units - 250) * 1.50" | bc)
fi

surcharge=$(echo "$bill * 0.20" | bc)
total=$(echo "$bill + $surcharge" | bc)

echo "Electricity bill before surcharge: Rs. $bill"
echo "Surcharge (20%): Rs. $surcharge"
echo "Total electricity bill: Rs. $total"