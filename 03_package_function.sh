#!/bin/bash

mkdir -p dist && zip -FS -q -r ./dist/gpx_webhook_processor.zip node_modules index.js package.json package-lock.json