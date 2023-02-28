import express from 'express'
import postSchema from '../schemas/categories.js'
import Category from './../models/Category.js'
import validator from './../middlewares/validator.js'
let router = express.Router()

router.get(
    '/', /* endpoint a concatenar con el endpoint del enrrutador principal */
    (req,res) => { /* funcion que se va a ejecutar cada vez que se llame al endpoint */
        //console.log(req)
        return res
            .status(200) /* 200: exito para la lectura */
            .send('aca deberias ver todas las categorias') /* send envía mensajes al cliente */
    }
)

router.post(
    '/',
    /* nombreDeUnMiddleware, */
    /* otroMiddle, */
    /* losqueQuieras, */
    validator(postSchema),
    async (req,res) => {
        try {
            let category = await Category.create(req.body)
            return res.status(201).json({ /* json me deja enviar jsons al cliente */
                success: true,
                category: category,
                id: category._id
            })
        } catch(error) {
            console.log(error)
            return res.status(400).json({
                success: false,
                message: 'no se pudo crear'
            })
        }        
    }
)

export default router