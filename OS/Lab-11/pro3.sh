#!/bin/bash
read -p "Enter a character: " ch

case $ch in
a|e|i|o|u|A|E|I|O|U)
    echo "Vowel"
    ;;
[a-zA-Z])
    echo "Consonant"
    ;;
*)
    echo "Invalid character"
    ;;
esac
