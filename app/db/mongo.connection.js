'use strict'

const mongoose = require('mongoose');
const config = require('./../config/index');
mongoose.connect(config.mongodb.host);

module.exports = mongoose;