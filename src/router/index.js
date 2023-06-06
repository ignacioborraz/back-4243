import { Router } from "express";
import movies_router from "./movies.js";
//import carts_router from "./carts.js"

let router = Router()

router.use('/movies',movies_router)
//router.use('/carts',carts_router)

export default router