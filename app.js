//var express = require('express')
import express from 'express'

//var path = require('path')
import path from 'path'

//var cookieParser = require('cookie-parser')
import cookieParser from 'cookie-parser'

//var logger = require('morgan')
import logger from 'morgan'

//var indexRouter = require('./routes/index')
import indexRouter from './routes/index'

//var usersRouter = require('./routes/users')
import usersRouter from './routes/users'

//var app = express()
let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/**
 * @app => .use() para usar middlewares para enrrutarme con esas "palabritas"
 * './product' es el endpoint
 * productRouter es el enrrutador de ese recurso (me va a conectar con las operaciones de crear/leer/modificar/eliminar productos)
 */
app.use('/', indexRouter)
app.use('/users', usersRouter)
//app.use('/products', productRouter)

//module.exports = app
export default app