#!/bin/bash -e
git submodule foreach git add --ignore-errors -A .
git submodule foreach 'git commit -q -am "this is the super commit" || :'
git submodule foreach git push origin master

git add --ignore-errors -A .
git commit -q -am  "this is the super commit"
git push origin master