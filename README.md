# hapi-advance-api
Advanced hapi api project architecture for a large scale project. It is designed to organise your api's into multiple modules. You can use multiple databases like mysql, mongodb and solr.

# Configure your app using .env file
Create .env file in root folder of the app and define all application level configuration. Mostaly .env files are not commited in your resposity, they are created environment specific on the respective environment machines.

Example:
### Common
NODE_ENV=DEVELOPMENT
HOST=localhost
PORT=8080

### Logging
LOG_ENABLED=true
LOG_LEVEL=info

### MongoDb
MONGO_DB_HOST=mongodb://localhost/test

### MySQL
MYSQL_DB_HOST=localhost
MYSQL_DB_USERNAME=root
MYSQL_DB_PASSWORD=
MYSQL_DB_NAME=test

# Folder structure:

### auth_strategies
Define all auth strategies in this folder.

### config
Define common and database config in this folder. Write specific config file in config/component folder and include it in index.js file.

Example common config module
```js
'use strict'

const config = {  
    env: process.env.NODE_ENV,
    logger: {
        level: process.env.LOG_LEVEL || 'info',
        enabled: process.env.LOG_ENABLED ? process.env.LOG_ENABLED.toLowerCase() === 'true' : false
    },
    server: {
        port: Number(process.env.PORT)
    },
    date_format: 'MM-DD-YYYY',
    bcryptSaltRounds: 10
}

module.exports = config
```

### db
Define all db connection and db models in this folder. Write models in db/models folder.

Example mysql config
```js
'use strict'

const knex = require('knex');
const config = require('./../config/index');

module.exports = knex({
    client: 'mysql',
    debug: true,
    connection: {
        host: config.mysql.host,
        user: config.mysql.username,
        password: config.mysql.password,
        database: config.mysql.dbname,
        charset: 'utf8',
    }
});
```

### helpers
Application specific helper methods can be written in index.js of this folder.

Example index.js
```js
'use strict'

const moment = require('moment');

var helpers = {
    isDevelopmentEvn: function() {
        return true;
    },
    formatDate: function(date, inputFormat, outputFormat) {
        return moment(date, inputFormat).format(outputFormat);
    }
}
module.exports = helpers; 
```

### modules
Create a new folder for a separate module. Write routes in index.js of the folder and include that file in modules/index.js file. Module specific service classes and controllers can be written in separate folders in a module.

Load user module routes
```js
'use strict'

var plugins = [
    { register : require('./user/index.js') }
];

module.exports = function() {
    return plugins;
} 
```

# How to manage node process
Use [PM2](http://pm2.keymetrics.io/)
