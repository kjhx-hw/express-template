const portNumber = 8000;
const sassDir = process.cwd() + '/sass';
const sassOutput = process.cwd() + '/static/css';
const sassCompression = 'compressed';
const logFormat = "dev";
const sessionOptions = {
    secret: 'bunnyslippers',
    saveUninitialized: false,
    resave: false
};

module.exports = {
    portNumber,
    sassDir,
    sassOutput,
    sassCompression,
    logFormat,
    sessionOptions
};