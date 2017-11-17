'use strict'
var mongoose = require('./../../mongo.connection.js');

var Schema = mongoose.Schema;
var UserModel = mongoose.model('tbl_user', {
    id: Int,
    email: String,
    password: String,
    status: Number
});

module.exports = UserModel;