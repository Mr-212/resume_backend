#!/bin/sh
set -e

APP_PATH=/var/www/resume_backend


chown -R www-data:www-data $APP_PATH
chmod -R 0777 $APP_PATH
chmod -R o+w $APP_PATH/storage/

cd $APP_PATH
npm i -f
npm run dev
echo "NODE ENTRY EXECUTED"

exec "$@"