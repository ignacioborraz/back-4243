import {Router} from 'express'
import products_router from './products.js'

const router = Router()

router.use('/products', products_router)




export default router