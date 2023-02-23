import userRouter from './users.js'
import categoriesRouter from './categories.js'
//import booksRouter from './books.js'

import express from 'express'
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API DE PRUEBA' })
})

/**
 * en el enrrutador principal voy a enrrutar todos los recursos
 * es decir voy a llamar y configurar las rutas de usuarios, categorias, libros, etc
 * a través del método .use() le indico al enrrutador principal que utilice esas rutas con esa palabrita (endpoint)
 */

router.use(
  '/users', /* endpoint del recurso que quiero controlar */
  userRouter /* las rutas del recurso que quiero controlar con ese endpoint */
)
router.use('/categories',categoriesRouter)
//router.use('/books',booksRouter)

export default router