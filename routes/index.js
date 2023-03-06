import userRouter from './users.js'
import categoriesRouter from './categories.js'

import express from 'express'
let router = express.Router()


router.get('/',function(req, res) {
  res.status(200).send('connected to server and database')
})

router.use(
  '/auth', /* endpoint del recurso que quiero controlar */
  userRouter /* las rutas del recurso que quiero controlar con ese endpoint */
)
router.use('/categories',categoriesRouter)

export default router