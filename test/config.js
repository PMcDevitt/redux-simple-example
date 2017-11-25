'use strict';

let environment = process.env.NODE_ENV || 'development';

let localOptions = {
    "environment": environment
};

module.exports = localOptions;