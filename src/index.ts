import 'express-session';
import { UserRole } from './enums/UserRole';

declare module 'express-session' {
  interface SessionData {
    userId?: string;
    username?: string;
    name?: string;
    role?: UserRole;
    avatar_url?: string;
  }
}

import createError, { HttpError } from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';
import session from 'express-session';
import { sessionMiddleware } from './middleware/auth.middleware';
import flash from 'express-flash';

import indexRouter from './routes/index';

import 'reflect-metadata';
import { AppDataSource } from './config/data-source';

import * as dotenv from 'dotenv';

dotenv.config();

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err: Error | unknown) => {
    console.error('Error during Data Source initialization:', err);
  });

// i18n
i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'vi'],
    preload: ['en', 'vi'],
    saveMissing: true,
    ns: ['lesson', 'user', 'common', 'exam', 'course', 'auth'],
    defaultNS: ['lesson', 'user', 'common', 'exam', 'course', 'auth'],
    backend: {
      loadPath: path.join(__dirname, './locales/{{lng}}/{{ns}}.json'),
      addPath: path.join(__dirname, 'locales/{{lng}}/{{ns}}.missing.json'),
    },
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie'],
      lookupQuerystring: 'lng',
      lookupCookie: 'lng',
      ignoreCase: true,
      cookieSecure: false,
    },
  });

// create and setup express app
const app = express();

// i18next middleware
app.use(
  middleware.handle(i18next, {
    ignoreRoutes: [],
    removeLngFromUrl: false,
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.t = req.t;
  next();
});

// Cấu hình session trong Express
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'abcxyz',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Đặt thành true nếu sử dụng HTTPS
  })
);

//thêm middleware cho việc quản lý sessions
app.use(sessionMiddleware);

app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
