import { Router } from "express"
import create from '../controllers/movies/create.js'

const movies_router = Router()

movies_router.post('/',create)

export default movies_router