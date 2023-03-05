import express from 'express' //metodos de express para configurar y levantar servidores
import 'dotenv/config.js'
import './config/database.js'
import createError from 'http-errors'
import path from 'path' //metodos para trabajar con rutas de archivos y directorios
import logger from 'morgan' //middleware que registra peticiones y errores HTTP
import indexRouter from './routes/index.js' //rutas de index
import cors from 'cors'
import { __dirname } from './utils.js' //direccion de la carpeta raíz del proyecto

import { errorHandler, errorNotFound } from './middleware/errorHandler.js'

const app = express() //método para levantar un servidor

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', indexRouter)

app.use(errorNotFound)

app.use(errorHandler)

export default app