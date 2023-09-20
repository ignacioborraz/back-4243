//CAPA DE ENRUTAMIENTO
//se va a encargar de que los requerimientos sean los correctos y va a elaborar la respuesta a enviar al cliente
//es decir aca manejamos REQ y RES
import MyRouter from "../router.js";
import AuthController from "../../controllers/users.controller.js";

import create_hash from "../../middlewares/create_hash.js";
import is_valid_user from "../../middlewares/is_valid_user.js";
import is_user from "../../middlewares/is_user.js";
import is_valid_pass from "../../middlewares/is_valid_pass.js";
import create_token from "../../middlewares/create_token.js";

import passport from "passport";

const controller = new AuthController();

export default class AuthRouter extends MyRouter {
  init() {
    this.create(
      "/register",
      is_valid_user,
      create_hash,
      async (req, res, next) => {
        try {
          let data = req.body;
          let response = await controller.register(data);
          return res.sendSuccessCreate(response);
        } catch (error) {
          next(error);
        }
      }
    );
    this.create(
      "/login",
      is_user,
      is_valid_pass,
      create_token,
      async (req, res, next) => {
        try {
          let user = req.user;
          let token = req.token;
          req.session.mail = req.body.mail;
          req.session.role = req.user.role;
          let response = await controller.login(user);
          return res
            .cookie("token", token, {
              maxAge: 60 * 60 * 24 * 7 * 1000,
              httpOnly: true,
            })
            .sendSuccessCreate(response);
        } catch (error) {
          next(error);
        }
      }
    );
    this.create(
      "/signout",
      passport.authenticate("jwt"),
      async (req, res, next) => {
        try {
          req.session.destroy();
          let response = await controller.signout();
          return res.clearCookie("token").sendSuccessCreate(response);
        } catch (error) {
          next(error);
        }
      }
    );
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
