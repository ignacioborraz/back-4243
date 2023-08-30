import { Router } from "express";
import create from "../controllers/carts/add_to_cart.js";
import read from "../controllers/carts/read_products_of_user.js";
import update from "../controllers/carts/update.js";
import destroy from "../controllers/carts/remove_from_cart.js";

const movies_router = Router();

//PARA AGREGAR PRODUCTOS A UN CARRITO
movies_router.post("/", create);

//PARA LEER LOS PRODUCTOS DE UN USUARIO EN EL CARRITO
movies_router.get("/", read);

//PARA ACTUALIZAR UNIDADES O ESTADO DEL PRODUCTO QUE ESTÁ EN EL CARRITO
movies_router.put("/:id", update);

//PARA QUITAR PRODUCTOS A UN CARRITO
movies_router.delete("/:id", destroy);

export default movies_router;
