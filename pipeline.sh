#!/usr/bin/env bash
echo $(python3 StaticCheck.py)
if [ $(python3 StaticCheck.py) = 0 ]
then
    echo 'Comment not present!'  
    exit 2
else
    echo 'Comment check passed!'  
fi
    
# npm install
# npm run build
# cd src/_tests_
# jest
# cd ../../../
# cd ..
# git add .
# git commit -m $1
# git push origin master
# git status;
