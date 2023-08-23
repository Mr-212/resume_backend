#!/bin/sh
set -e

APP_PATH=/var/www/resume_backend

# chown -R /var/www/resume_backend
# chown -R 775 /var/www/resume_backend


chown -R www-data:www-data $APP_PATH
chmod -R 0777 $APP_PATH
chmod -R o+w $APP_PATH/storage/
echo "ServerName localhost" >> /etc/apache2/apache2.conf
# echo "ServerName resume.dev" >> /etc/apache2/apache2.conf
# echo "127.0.0.1 resume.dev" >> /etc/hosts
a2enmod rewrite
# service apache2 restart

cd $APP_PATH
# composer install
# # cp vendor/h4cc/wkhtmltoimage-amd64/bin/wkhtmltoimage-amd64 /usr/local/bin/
# # cp vendor/h4cc/wkhtmltopdf-amd64/bin/wkhtmltopdf-amd64 /usr/local/bin/
# # chmod +x /usr/local/bin/wkhtmltoimage-amd64 
# # chmod +x /usr/local/bin/wkhtmltopdf-amd64
# # php artisan vendor:publish --provider="Barryvdh\Snappy\ServiceProvider"
# chmod 777 -R storage
# php artisan storage:link
# composer dump-autoload
# php artisan optimize:clear
# php artisan optimize
# php artisan migrate
# apachectl -D FOREGROUND
echo "PHP ENTRY EXECUTED"


# cd $APP_PATH
exec "$@"