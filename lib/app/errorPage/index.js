const express = require('express');
const { errorPage } = require('./errorPage');

const routes = express.Router();

routes.get('/', errorPage);

module.exports = { routes };