#!/usr/bin/env bash

TRAVIS_BRANCH=develop

if [ "$TRAVIS_BRANCH" = "master" ]; then 
    _FTP_USER=$FTP_USER
    _FTP_PASSWORD=$FTP_PASSWORD

    echo "Deploying to prod"
fi
    
if [ "$TRAVIS_BRANCH" = "develop" ]; then 
    _FTP_USER=$FTP_DEVELOP_USER
    _FTP_PASSWORD=$FTP_DEVELOP_PASSWORD
    
    echo "Deploying to develop"
fi
    
find dist -type f -exec curl --ftp-create-dirs -T {} -u $_FTP_USER:$_FTP_PASSWORD ftp://$FTP_HOST/{} \;
