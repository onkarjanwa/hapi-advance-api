# hapi-advance-api
Advanced hapi api project architecture for a large scale project. It is designed to organise your api's into multiple modules. You can use multiple databases like mysql, mongodb and solr.

# Configure your app using .env file
Create .env file in root folder of the app and define all application level configuration. Mostaly .env files are not commited in your resposity, they are created environment specific on the production machines.

Example:
#Common
NODE_ENV=DEVELOPMENT
HOST=localhost
PORT=8080

#Logging
LOG_ENABLED=true
LOG_LEVEL=info

#MongoDb
MONGO_DB_HOST=mongodb://localhost/test

#MySQL
MYSQL_DB_HOST=localhost
MYSQL_DB_USERNAME=root
MYSQL_DB_PASSWORD=
MYSQL_DB_NAME=test

# PM2 can be used to manage node process.