#!/bin/bash
read -p "Enter directory name to check: " dircheck
if [ -d "$dircheck" ]; then
    echo "Directory '$dircheck' exists."
else
    echo "Directory '$dircheck' does not exist."
fi