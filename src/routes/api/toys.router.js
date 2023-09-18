import MyRouter from "../router.js";
import ToysController from "../../controllers/toys.controller.js";

const controller = new ToysController()

export default class ToysRouter extends MyRouter {
  init() {
    this.create("/", async (req, res, next) => {
      try {
        const data = req.body
        const response = await controller.createController(data)
        return res.sendSuccessCreate(response);
      } catch (error) {
        next(error);
      }
    });
    this.read("/", async (req, res, next) => {
      try {
        const response = await controller.readController()
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound();
        }
      } catch (error) {
        next(error);
      }
    });
    this.update("/:id", async (req, res, next) => {
      try {
        const { id } = req.params
        const data = req.body
        const response = await controller.updateController(id,data)
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound();
        }
      } catch (error) {
        next(error);
      }
    });
    this.destroy("/:id", async (req, res, next) => {
      try {
        const { id } = req.params
        const response = await controller.destroyController(id)
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
