#!/bin/bash
echo "1. Display all executable files, directories, and zero-sized files from current directory"
for file in *; do
    if [ -x "$file" ]; then
        echo "Executable: $file"
    elif [ -d "$file" ]; then
        echo "Directory: $file"
    elif [ ! -s "$file" ]; then
        echo "Zero-sized file: $file"
    fi
done