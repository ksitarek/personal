#!/usr/bin/env bash

if [ "$TRAVIS_BRANCH" = "master" ]
then
    echo "Deploy to production"
    find dist -type f -exec curl --ftp-create-dirs -T {} -u $FTP_USER:$FTP_PASSWORD ftp://$FTP_HOST/{} \\;
elif [ "$TRAVIS_BRANCH" = "develop" ]
then
    echo "Deploy to develop"
    find dist -type f -exec curl --ftp-create-dirs -T {} -u $FTP_DEVELOP_USER:$FTP_DEVELOP_PASSWORD ftp://$FTP_HOST/{} \\;
fi