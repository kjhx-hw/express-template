import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import morgan from 'morgan';
// import expressSession from 'express-session';
// import sessionFileStore from 'session-file-store';
import expressHandlebars from 'express-handlebars';
import * as config from '../config';

import * as feature_name from './feature_name';

// APP
export const app = express();
// const FileStore = sessionFileStore(expressSession);
// app.use(expressSession({ ...config.sessionOptions, store: new FileStore() }));
app.engine('hbs', expressHandlebars({ extname: '.hbs' }));
app.set('views', process.cwd() + '/templates');
app.use(morgan(config.logFormat));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MOUNTS
app.use('/feature_name', feature_name.router);

// DEFAULTS
app.use(express.static("./static"));
app.all('/', (req: Request, res: Response) => res.render('index.hbs'));
app.use((req: Request, res: Response, next: NextFunction) => {
    next({ code: 404, title: "File Not Found", msg: "The resource you are trying to access could not be located." });
    return;
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.render('error.hbs', { error: err.code, title: err.title, explanation: err.msg });
});