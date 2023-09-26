//CAPA DE ENRUTAMIENTO
//se va a encargar de que los requerimientos sean los correctos y va a elaborar la respuesta a enviar al cliente
//es decir aca manejamos REQ y RES
import MyRouter from "../router.js";
import ToysController from "../../controllers/toys.controller.js";

const toysController = new ToysController();

export default class ToysRouter extends MyRouter {
  init() {
    this.create("/", async (req, res, next) => {
      try {
        let data = req.body;
        let response = await toysController.createController(data);
        //console.log(response);
        return res.sendSuccessCreate(response);
      } catch (error) {
        next(error);
      }
    });
    this.read("/", async (req, res, next) => {
      try {
        let response = await toysController.readController();
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("products");
        }
      } catch (error) {
        next(error);
      }
    });
    this.read("/:id", async (req, res, next) => {
      try {
        let { id } = req.params;
        let response = await toysController.readOneController(id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("product");
        }
      } catch (error) {
        next(error);
      }
    });
    this.update("/:id", async (req, res, next) => {
      try {
        let { id } = req.params;
        let data = req.body;
        let response = await toysController.updateController(id, data);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("product");
        }
      } catch (error) {
        next(error);
      }
    });
    this.destroy("/:id", async (req, res, next) => {
      try {
        let { id } = req.params;
        let response = await toysController.destroyController(id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("product");
        }
      } catch (error) {
        next(error);
      }
    });
  }
}
