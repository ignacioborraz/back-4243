//CAPA DE ENRUTAMIENTO
//se va a encargar de que los requerimientos sean los correctos y va a elaborar la respuesta a enviar al cliente
//es decir aca manejamos REQ y RES
import MyRouter from "../router.js";
import CartsController from "../../controllers/carts.controller.js";

import passport from "passport";

const cartsController = new CartsController();

export default class CartsRouter extends MyRouter {
  init() {
    this.create("/", passport.authenticate("jwt"), async (req, res, next) => {
      try {
        let user = req.user;
        let data = req.body;
        data.user_id = user._id;
        let response = await cartsController.createController(data);
        return res.sendSuccessCreate(response);
      } catch (error) {
        next(error);
      }
    });
    this.read("/", passport.authenticate("jwt"), async (req, res, next) => {
      try {
        let user_id = req.user._id;
        let state = "pending"; //por default que state='pending'
        if (req.query.state) {
          state = req.query.state;
        }
        let response = await cartsController.filterController(user_id, state);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("cart");
        }
      } catch (error) {
        next(error);
      }
    });
    this.update(
      "/:id",
      passport.authenticate("jwt"),
      async (req, res, next) => {
        try {
          let cart_id = req.params.id;
          let data = req.body;
          let response = await cartsController.updateController(cart_id, data);
          if (response) {
            return res.sendSuccess(response);
          } else {
            return res.sendNotFound("product");
          }
        } catch (error) {
          next(error);
        }
      }
    );
    this.destroy(
      "/:id",
      passport.authenticate("jwt"),
      async (req, res, next) => {
        try {
          let cart_id = req.params.id;
          let response = await cartsController.destroyController(cart_id);
          if (response) {
            return res.sendSuccess(response);
          } else {
            return res.sendNotFound("product");
          }
        } catch (error) {
          next(error);
        }
      }
    );
  }
}
