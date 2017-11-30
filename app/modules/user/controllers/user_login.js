'use strict';
var moment = require('moment');
var knexInstance = loadDb('mysql.connection.js');
var bookshelf = require('bookshelf')(knexInstance);

var UserDbModel = loadDb('models/mysql/user.js');

var UserLoginController = {};

UserLoginController.post = function(request, reply) {
    var response = {};

    new UserDbModel({'email': request.payload.email, 'password': request.payload.password}).fetch().then(function(userModal) {
        if(userModal) {
        	response.user = {};
            response.user.email = userModal.attributes.email;
            response.user.password = userModal.attributes.password;
            reply(response);
        } else {
            reply({}).code(404);
        }
    });
}

module.exports = UserLoginController;