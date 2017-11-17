const Joi = require('joi');
var userLoginController = require('./controllers/user_login.js');
/************************************************** 
* Configuring User Plugins
**************************************************/
/** 
* Register Plugins 
*/
exports.register = function(server, options, next) {
    server.route([               
        {
            method : 'POST',          
            path : '/user/login',          
            handler : userLoginController.post     
        }                       
    ]);
    next();
};

/** 
* Plugin attributes... 
* we have here the Name and the Version of the plugin 
* make every name Unique 
*/

exports.register.attributes = {
    name : 'UserModule',
    version : '1.0.0'
};