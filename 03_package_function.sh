#!/bin/bash

mkdir -p dist && zip -FS -q -r ./dist/webhook_processor.zip node_modules index.js package.json package-lock.json