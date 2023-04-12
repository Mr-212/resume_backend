
FROM node:16-buster-slim AS node

FROM php:8.0-apache

RUN apt update \
        && apt install -y \
            g++ \
            libicu-dev \
            libpq-dev \
            libzip-dev \
            zip \
            zlib1g-dev \
        && docker-php-ext-install \
            intl \
            opcache \
            pdo \
            pdo_pgsql \
            pgsql 


COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node /usr/local/bin/node /usr/local/bin/node
RUN ln -sf /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm            
RUN npm install --global npx yarn

# WORKDIR /var/www/resume_backend

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN coposer install
COPY vendor/h4cc/wkhtmltoimage-amd64/bin/wkhtmltoimage-amd64 /usr/local/bin/
COPY vendor/h4cc/wkhtmltopdf-amd64/bin/wkhtmltopdf-amd64 /usr/local/bin/
RUN chmod +x /usr/local/bin/wkhtmltoimage-amd64 
RUN chmod +x /usr/local/bin/wkhtmltopdf-amd64
RUN php artisan vendor:publish --provider="Barryvdh\Snappy\ServiceProvider"
RUN chmod 777 -R storage
RUN php artisan storage:link


RUN a2enmod rewrite
