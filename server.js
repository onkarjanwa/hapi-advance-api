'use strict';

const Hapi = require('hapi');
require('dotenv').config();

// Create a server with a host and port
const server = new Hapi.Server();

server.realm.modifiers.route.prefix = '/api'

server.connection({ 
    host: process.env.HOST, 
    port: process.env.PORT,
    routes: { cors: true } 
});

// Add the route
server.register(require('./app/modules/index')());

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});