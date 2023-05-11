import { Router } from "express";
import productManager from "../managers/Product.js";
import areUnits from "../middlewares/areUnits.js";

const products_router = Router();

//POST /api/products para crear un producto

//GET /api/products?quantity=5 para ver todos los productos

//PUT /api/products/:id/:quantity para modificar el stock del producto
products_router.put("/:pid/:units", areUnits, async (req, res, next) => {
  try {
    let id = Number(req.params.pid);
    let units = Number(req.params.units);
    let data = { stock: units };
    await productManager.update_product(id, data);
    return res.json({
      status: 200,
      message: "product updated successfully",
    });
  } catch (error) {
    next(error);
  }
});

export default products_router;
