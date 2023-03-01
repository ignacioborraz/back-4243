import userRouter from './users.js'
import categoriesRouter from './categories.js'
import createError from 'http-errors';
//import booksRouter from './books.js'
import {authorIsActive, isAuthor} from '../middleware/author.js'

import express from 'express'
let router = express.Router()

/* GET home page. */
router.get('/', /* passport.authenticate(), */isAuthor, authorIsActive, function(req, res, next) {
  // res.render('index', { title: 'API DE PRUEBA' })
  // try {
    
  //   // Peticion get para obtener un usuario
  //   let user = {
  //     name: 'Igna'
  //   }; // Esto puede venir de la base de datos === let pepito = undefined

  //   if(user) {
  //     return res.status(200).json({
  //       user: user
  //     })
  //   }

  //   return next(createError(404, 'Usuario no encontrado'))

  // } catch(err) {
  //   next(createError(500, 'Algo salio mal'))
  // }

  res.status(200).json({
    message: 'Llegaste hasta el controlador'
  })
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