#!/bin/bash

sudo docker run --rm --volume ${PWD}:/build amazonlinux:2nodejs14 \
/bin/bash -c "source ~/.bashrc; npm init -f -y; npm install @rudderstack/rudder-sdk-node --save; npm install --only=prod"