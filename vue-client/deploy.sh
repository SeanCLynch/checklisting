#!/bin/bash

echo "Deploying..."
npm run build && sudo cp -a ./dist/* /var/www/html/
