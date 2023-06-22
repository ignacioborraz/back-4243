import { Router } from "express"
import create from '../controllers/movies/create.js'
import read from "../controllers/movies/read.js"
import readOne from "../controllers/movies/readOne.js"

const movies_router = Router()

movies_router.post('/',create)
movies_router.get('/',read)
movies_router.get('/:id',readOne)

export default movies_router