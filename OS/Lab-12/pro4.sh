#!/bin/bash
while true; do
    echo "---------------------------------"
    echo "Menu:"
    echo "1. Display calendar of current month"
    echo "2. Display today's date and time"
    echo "3. Display usernames currently logged in"
    echo "4. Display your name at given x, y position"
    echo "5. Display your terminal number"
    echo "6. Exit"
    read -p "Enter your choice [1-6]: " choice

    case $choice in
        1) cal ;;
        2) date ;;
        3) who ;;
        4) 
            read -p "Enter X position: " x
            read -p "Enter Y position: " y
            tput cup $y $x
            echo "Your Name: $USER"
            ;;
        5) tty ;;
        6) echo "Exiting..."; break ;;
        *) echo "Invalid choice. Try again." ;;
    esac
done