#!/bin/bash
read -p "Enter username to check: " uname
if [ `grep -c $uname /etc/passwd` -eq 0 ] 
then
    echo "User '$uname' not exists."
else
    echo "User '$uname' exist."
fi
