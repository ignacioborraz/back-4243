import express from 'express'
import postSchema from '../schemas/categories.js'
import create_controller from '../controllers/categories/create.js'
import readl_all_controller from '../controllers/categories/read_all.js'
import validator from './../middlewares/validator.js'

const { create } = create_controller
const { read_all } = readl_all_controller

let router = express.Router()

router.get('/',read_all)
router.post('/',/* middle para autenticar el usuario, */validator(postSchema),create)

export default router