import { Router } from "express";
import productManager from "../managers/Product.js";
import productValidator from "../middlewares/productValidator.js";

const products_router = Router()

//POST /api/products para crear un producto
products_router.post(
    '/', //Primer parámetro el endpoint
    productValidator, //middlewares (la cantidad que sean)
    async (req, res, next)=>{ //Funcion para controlar el recurso (En esta caso para crear)
        try {
            let data = req.body;
            await productManager.add_product(data);
            return res.json(
                {
                    status: 201,
                    message: "Product created succesfully"
                }
            )
        } catch (error) {
            next(error);
        }
    }
)

//GET /api/products?quantity=5 para ver todos los productos


//PUT /api/products/:id/:quantity para modificar el stock del producto


export default products_router