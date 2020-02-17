const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const sessionFileStore = require('session-file-store');
const expressHandlebars = require('express-handlebars');
const sass = require('node-sass-middleware');
const config = require('../config');

// APP
const app = express();
// const FileStore = sessionFileStore(expressSession);
// app.use(expressSession({ ...config.sessionOptions, store: new FileStore() }));
app.engine('hbs', expressHandlebars({ extname: '.hbs' }));
app.set('views', process.cwd() + '/templates');
app.use('/css', sass({ src: config.sassDir, dest: config.sassOutput, debug: true, outputStyle: config.sassCompression }));
app.use(morgan(config.logFormat));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MOUNTS
// mount features here

// DEFAULTS
app.use(express.static("./static"));
app.all('/', (req, res) => res.render('index.hbs'));
app.use((req, res) => {
    let data = {
        error: 404,
        title: "Page Not Found",
        explanation: "We couldn't find the page you were looking for.",
    };

    res.render('error.hbs', data);
});

module.exports = { app };