var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var crudRoutes = require('./open-config/oconf.router.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var oconfRouter = require('./routes/oconf');

dotenv.config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/oconf', oconfRouter);
app.use(crudRoutes);

module.exports = app;
