import express from 'express'
import postSchema from '../schemas/users.js'

let router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('deberia mostrar todos los usuarios');
});

export default router