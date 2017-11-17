'use strict'

const config = {  
    env: process.env.NODE_ENV,
    logger: {
        level: process.env.LOG_LEVEL || 'info',
        enabled: process.env.LOG_ENABLED ? process.env.LOG_ENABLED.toLowerCase() === 'true' : false
    },
    server: {
        port: Number(process.env.PORT)
    },
    date_format: 'MM-DD-YYYY'
}

module.exports = config