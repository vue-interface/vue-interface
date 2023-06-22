#!/bin/bash -e
if [ -z $1 ]; then
    echo "You need to provide a commit message"
    exit
fi

git submodule foreach git add --ignore-errors -A .
git submodule foreach 'git commit -q -am "$1" || :'

git add --ignore-errors -A .
git commit -q -am  "$1"