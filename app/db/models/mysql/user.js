'use strict'
var moment = require('moment');
var knexInstance = require('./../../mysql.connection.js');
var bookshelf = require('bookshelf')(knexInstance); 

module.exports = bookshelf.Model.extend({
    tableName: 'tbl_user',
    initialize: function() {
        this.on('creating', this.beforeAdd, this);
    },
    beforeAdd: function(model, attrs, options) {
        return new Promise(function(resolve, reject) {
            model.set('date_created', moment().format("YYYY-MM-DD HH:mm:ss"));
            resolve(model);
        });
    }
});