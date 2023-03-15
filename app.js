import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import path from 'path'
import logger from 'morgan'
import indexRouter from './routes/index.js'
import cors from 'cors'
import { __dirname } from './utils.js'
import errorHandler from './middlewares/errorHandler.js'
import notFoundEndpoint from './middlewares/notFoundEndpoint.js'

const app = express()

//middlewares
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', indexRouter)
app.use(notFoundEndpoint)
app.use(errorHandler)

app.use(errorNotFound)

app.use(errorHandler)

export default app