import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from './middlewares/notFoundHandler.js'
import router from "./router/index.js";

const app = express()
//Middlewares
app.use('/public', express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Router
app.use('/api', router)
app.use(errorHandler)
app.use(notFoundHandler)

export default app