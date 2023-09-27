import MyRouter from "../router.js";
import AuthController from "../../controllers/users.controller.js";

import is_valid_user from "../../middlewares/is_valid_user.js";
import is_user from "../../middlewares/is_user.js";
import is_valid_pass from "../../middlewares/is_valid_pass.js";
import create_token from "../../middlewares/create_token.js";

import passport from "passport";

export default class AuthRouter extends MyRouter {
  init() {
    this.create("/register", is_valid_user, async (req, res, next) => {
      try {
        let data = req.body;
        const controller = new AuthController();
        let response = await controller.register(data);
        return res.sendSuccessCreate(response);
      } catch (error) {
        next(error);
      }
    });
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
          const controller = new AuthController();
          let response = await controller.login(user);
          //response.response.user.password = null;
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
          const controller = new AuthController();
          let response = await controller.signout();
          return res.clearCookie("token").sendSuccessCreate(response);
        } catch (error) {
          next(error);
        }
      }
    );
    this.read("/", async (req, res, next) => {
      try {
        const controller = new AuthController();
        let response = await controller.read();
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("users");
        }
      } catch (error) {
        next(error);
      }
    });
    this.read("/me", passport.authenticate("jwt"), async (req, res, next) => {
      try {
        let data = req.user;
        return res.sendSuccess({
          message: "user found!",
          response: data,
        });
      } catch (error) {
        next(error);
      }
    });
    this.update("/", passport.authenticate("jwt"), async (req, res, next) => {
      try {
        let { mail } = req.user;
        let data = req.body;
        const controller = new AuthController();
        let response = await controller.updateOne(mail, data);
        if (response) {
          response.response.password = null;
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("user");
        }
      } catch (error) {
        next(error);
      }
    });
    this.destroy("/", passport.authenticate("jwt"), async (req, res, next) => {
      try {
        let { mail } = req.user;
        const controller = new AuthController();
        let response = await controller.destroyOne(mail);
        if (response) {
          req.session.destroy();
          response.response.password = null;
          return res.clearCookie("token").sendSuccess(response);
        } else {
          return res.sendNotFound("user");
        }
      } catch (error) {
        next(error);
      }
    });
  }
}
