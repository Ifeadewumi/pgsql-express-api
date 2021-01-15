/* ES6 Version*/

import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
// var logger = require('morgan');
// var express = require('express');
// var cookieParser = require('cookie-parser');
// var indexRouter = require('./routes/index');
// var app = express();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

// module.exports = app;
export default app;

