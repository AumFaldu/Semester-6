#!/bin/bash
read -p "Enter directory name to create: " dirname
if [ -d "$dirname" ]; then
    echo "Directory '$dirname' already exists."
else
    mkdir "$dirname"
    echo "Directory '$dirname' created successfully."
fi