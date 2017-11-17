'use strict'

var plugins = [
    { register : require('./user/index.js') }
];

module.exports = function() {
    return plugins;
} 