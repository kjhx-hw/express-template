import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import morgan from 'morgan';
import expressSession from 'express-session';
import sessionFileStore from 'session-file-store';
import expressHandlebars from 'express-handlebars';
// import sass from 'node-sass-middleware';
import * as config from '../config';

import * as feature_name from './feature_name';

// APP
export const app = express();
// const FileStore = sessionFileStore(expressSession);
// app.use(expressSession({ ...config.sessionOptions, store: new FileStore() }));
app.engine('hbs', expressHandlebars({ extname: '.hbs' }));
app.set('views', process.cwd() + '/templates');
// app.use('/css', sass({ src: config.sassDir, dest: config.sassOutput, debug: true, outputStyle: config.sassCompression }));
app.use(morgan(config.logFormat));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MOUNTS
app.use('/feature_name', feature_name.router);

// DEFAULTS
app.use(express.static("./static"));
app.all('/', (req: Request, res: Response) => res.render('index.hbs'));
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    let data = {
        error: err.code,
        title: err.name,
        explanation: err.msg,
    };

    res.render('error.hbs', data);
});