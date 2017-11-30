'use strict';

const Hapi = require('hapi');
require('dotenv').config();

global.appRequire = function(name) {
    return require(__dirname + '/app/' + name);
}
global.loadConfig = function() {
    return appRequire('config');
}
global.loadDb = function(name) {
    return appRequire('db/'+name);
}
global.loadHelpers = function(name) {
    return appRequire('helpers/'+name);
}
global.loadEvents = function() {
    return appRequire('events');
}
global.loadModules = function(name) {
    return appRequire('modules/'+name);
}

// Create a server with a host and port
const server = new Hapi.Server();

server.realm.modifiers.route.prefix = '/api'

server.connection({ 
    host: process.env.HOST, 
    port: process.env.PORT,
    routes: { cors: true } 
});

// Add the route
server.register(loadModules('index')());

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});