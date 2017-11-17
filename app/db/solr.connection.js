// Load dependency
var solr = require('solr-client');

// Create a client
var client = solr.createClient();

module.exports = client;