//CAPA DE ENRUTAMIENTO
//se va a encargar de que los requerimientos sean los correctos y va a elaborar la respuesta a enviar al cliente
//es decir aca manejamos REQ y RES
import MyRouter from "../router.js";
import AuthController from "../../controllers/users.controller.js";

const controller = new AuthController();

export default class ToysRouter extends MyRouter {
  init() {
    this.create("/register", async (req, res, next) => {
      try {
        let data = req.body;
        let response = await controller.register(data);
        return res.sendSuccessCreate(response);
      } catch (error) {
        next(error);
      }
    });
    this.create("/login", async (req, res, next) => {
      try {
        let data = req.body;
        let response = await controller.login(data);
        return res.sendSuccessCreate(response);
      } catch (error) {
        next(error);
      }
    });
    this.create("/signout", async (req, res, next) => {
      try {
        let data = req.user;
        let response = await controller.signout();
        return res.sendSuccessCreate(response);
      } catch (error) {
        next(error);
      }
    });
    this.read("/", async (req, res, next) => {
      try {
        let response = await controller.read();
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound();
        }
      } catch (error) {
        next(error);
      }
    });
    this.read("/", async (req, res, next) => {
      try {
        let { mail } = req.user;
        let response = await controller.readOne(mail);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound();
        }
      } catch (error) {
        next(error);
      }
    });
    this.update("/", async (req, res, next) => {
      try {
        let { mail } = req.user;
        let data = req.body;
        let response = await controller.update(mail, data);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound();
        }
      } catch (error) {
        next(error);
      }
    });
    this.destroy("/", async (req, res, next) => {
      try {
        let { mail } = req.user;
        let response = await controller.destroy(mail);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound();
        }
      } catch (error) {
        next(error);
      }
    });
  }
}
