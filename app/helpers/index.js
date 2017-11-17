'use strict'
const moment = require('moment');

var helpers = {
    isDevelopmentEvn: function() {
        return true;
    },
    formatDate: function(date, inputFormat, outputFormat) {
        return moment(date, inputFormat).format(outputFormat);
    }
};

module.exports = helpers; 