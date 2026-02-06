read -p "Enter lower and higher number : " low high
i=$((low))
while [[ $i -le $high ]]
do
    if [[ $((i%2)) -eq 0 && $((i%3)) -ne 0 ]]
    then
        echo "$i"
    fi
    i=$((i+1))
done