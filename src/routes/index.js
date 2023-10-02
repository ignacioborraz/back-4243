import { fork } from "child_process";
import MyRouter from "./router.js";
import ToysRouter from "./api/toys.router.js";
import CartsRouter from "./api/carts.router.js";
import AuthRouter from "./api/auth.router.js";

import transport from "../config/transport.js";
import config from "../config/config.js";
import { __dirname } from "../../utils.js";

const toys = new ToysRouter();
const carts = new CartsRouter();
const auth = new AuthRouter();

export default class IndexRouter extends MyRouter {
  init() {
    this.create("/", async (req, res, next) => {
      try {
        let to = req.body.to;
        let subject = req.body.subject;
        let html = `<img src="cid:foto_prueba">`;
        await transport.sendMail({
          from: `CODER <${config.G_MAIL}>`,
          to,
          subject,
          html,
          attachments: [
            {
              filename: "foto.png",
              path: "ruta de foto (usar utils correctamente)",
              cid: "foto_prueba",
            },
          ],
        });
        res.status(200).send("correo enviado correctamente");
      } catch (error) {
        next(error);
      }
    });
    this.use("/toys", toys.getRouter());
    this.use("/carts", carts.getRouter());
    this.use("/auth", auth.getRouter());
    this.read("/sum", (req, res) => {
      const child = fork("./src/config/sum.js"); //llamamos al proceso a forkear
      child.send("start"); //el padre envía mensaje al hijo
      child.on("message", (response) => {
        //cuando el hijo responde
        return res.status(200).json({ response }); //enviamos la respuesta al cliente
      });
    });
  }
}
