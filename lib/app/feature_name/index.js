const express = require('express');
const { feature } = require('./feature');

const routes = express.Router();

routes.get('/', feature);

module.exports = { routes };