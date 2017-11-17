'use strict'

const common = require('./components/common')  
const mysql = require('./components/mysql')

module.exports = Object.assign({}, common, mysql)  