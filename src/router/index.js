import { Router } from "express"
import auth_router from "./auth.js"
import movies_router from "./movies.js"

const index_router = Router()
index_router.use('/auth',auth_router)
index_router.use('/movies',movies_router)

export default index_router