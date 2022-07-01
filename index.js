const { createRouter } = require('./src/server/router.js');
const { startServer } = require('./src/server/server.js');
const { notFound } = require('./src/handler/notFound.js');

module.exports = { createRouter, startServer, notFound };