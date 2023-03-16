import express from 'express'
import postSchema from '../schemas/categories.js'
import create_controller from '../controllers/categories/create.js'
import read_all_controller from '../controllers/categories/read_all.js'
import update_controller from '../controllers/categories/update.js'
import destroy_controller from '../controllers/categories/destroy.js'
import validator from './../middlewares/validator.js'
import passport from './../middlewares/passport.js'

const { create } = create_controller
const { all } = read_all_controller
const { update,upd } = update_controller
const { destroy,dts } = destroy_controller

let router = express.Router()

router.get('/',all)
router.post('/',/* middle para autenticar el usuario, */validator(postSchema),create)
router.put('/:id',update)
router.patch('/:id',passport.authenticate('jwt',{ session: false }),upd)
router.delete('/:id',passport.authenticate('jwt',{ session: false }),destroy)
router.delete('/dts/:id',passport.authenticate('jwt',{ session: false }),dts)

export default router