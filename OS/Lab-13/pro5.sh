#!/bin/bash
read -p "Enter filename to count lines: " filecount
if [ -f "$filecount" ]; then
    lines=$(wc -l < "$filecount")
    echo "File '$filecount' has $lines lines."
else
    echo "File '$filecount' does not exist."
fi