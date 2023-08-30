import { Router } from "express"
import carts_router from "./carts.js"

const index_router = Router()
index_router.use('/carts',carts_router)

export default index_router