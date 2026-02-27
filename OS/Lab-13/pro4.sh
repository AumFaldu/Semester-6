#!/bin/bash
read -p "Enter directory to list files: " listdir
if [ -d "$listdir" ]
then
    echo "Files in directory '$listdir':"
    ls -l "$listdir"
else
    echo "Directory '$listdir' does not exist."
fi