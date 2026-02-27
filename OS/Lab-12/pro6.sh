#!/bin/bash
total_users=$(cut -d: -f1 /etc/passwd | wc -l)
logged_in=$(who | wc -l)
echo "Total users in system: $total_users"
echo "Users currently logged in: $logged_in"