'use strict'

const config = {  
    mysql: {
        host: process.env.MYSQL_DB_HOST,
        username: process.env.MYSQL_DB_USERNAME,
        password: process.env.MYSQL_DB_PASSWORD,
        dbname: process.env.MYSQL_DB_NAME
    }
}

module.exports = config