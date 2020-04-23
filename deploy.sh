#!/usr/bin/env bash

set -eux

DART_VER='2.7.2'

curl -o dart.zip https://storage.googleapis.com/dart-archive/channels/stable/release/${DART_VER}/sdk/dartsdk-linux-x64-release.zip
unzip dart.zip

PUB=./dart-sdk/bin/pub
${PUB} global activate webdev
${PUB} get .
${PUB} global run webdev build --output=web:build
find build -type f -name "*.js.map" -exec rm {} +
