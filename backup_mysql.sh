#bin/bash
# sudo chmod -R 777 /var/backups/mysql/
sudo mkdir /var/www/resume_backend/database/backups
# sudo chmod -R 777 /var/www/resume_backend/database
# docker exec mysql_db mysqldump -u root -proot resume_app > /var/backups/mysql/resume_app.sql
# docker exec mysql_db mysqldump -u root -proot resume_app > /var/backups/mysql/resume_app_$(date +"%Y-%m-%d_%H-%M-%S").sql
docker exec mysql_db mysqldump -u root -proot resume_app > /var/www/resume_backend/database/backups/db_$(date +"%Y-%m-%d_%H-%M-%S").sql
