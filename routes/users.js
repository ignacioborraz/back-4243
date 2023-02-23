import express from 'express'
let router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('deberia mostrar todos los usuarios');
});

export default router