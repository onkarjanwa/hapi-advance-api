'use strict'

const knex = require('knex');
const config = loadConfig();

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