read -p "Enter value of n : " n
i=1
while [[ $i -le $n ]]
do
    echo "$i"
    i=$((i+2))
done