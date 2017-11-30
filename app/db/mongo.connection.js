'use strict'

const mongoose = require('mongoose');
const config = loadConfig();
mongoose.connect(config.mongodb.host);

module.exports = mongoose;