#!/bin/sh
set -e

APP_PATH=/var/www/resume_backend

# chown -R /var/www/resume_backend
# chown -R 775 /var/www/resume_backend


chown -R www-data:www-data $APP_PATH
chmod -R 0777 $APP_PATH
# echo "ServerName localhost" >> /etc/apache2/apache2.conf
echo "ServerName resume.dev" >> /etc/apache2/apache2.conf
# echo "127.0.0.1 resume.dev" >> /etc/hosts

a2enmod rewrite
# service apache2 restart
apachectl -D FOREGROUND

cd $APP_PATH
composer dump-autoload


# cd $APP_PATH
# exec "$@"