const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const config = require('../config');

const errorPage = require('./errorPage');

// APP
const app = express();
app.use(morgan(config.logFormat));
// app.use(expressSession({ ...config.sessionOptions, store: new FileStore() }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MOUNTS
app.use(express.static("./static"));

// ERROR HANDLING
app.use('*', errorPage.routes);

module.exports = { app };