import 'express-session';
import { UserRole } from './enums/UserRole';

declare module 'express-session' {
  interface SessionData {
    userId?: string;
    username?: string;
    name?: string;
    role?: UserRole;
  }
}

import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError, { HttpError } from 'http-errors';
import session from 'express-session';
import SequelizeStore from 'connect-session-sequelize';
import { Sequelize } from 'sequelize';
import { AppDataSource } from './config/data-source';
import mainRoutes from './routes/index';
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

// create and setup express app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Tạo kết nối Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    dialect: 'mysql',
  }
);

// Tạo Session Store
const SessionStore = SequelizeStore(session.Store);
const sessionStore = new SessionStore({
  db: sequelize,
});

// Cấu hình session trong Express
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_secret_key', // Cung cấp giá trị mặc định
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { secure: false }, // Đặt thành true nếu sử dụng HTTPS
  })
);

// Đồng bộ session store
sessionStore.sync();

// use routes
app.use('/', mainRoutes); // Sử dụng mainRoutes để chứa tất cả các route

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
