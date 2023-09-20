import { fork } from "child_process";
import MyRouter from "./router.js";
import ToysRouter from "./api/toys.router.js";

const toys = new ToysRouter();

export default class IndexRouter extends MyRouter {
  init() {
    this.read("/", (req, res) => res.status(200).send("TOY STORE API"));
    this.use("/toys", toys.getRouter());
    this.read("/sum", (req, res) => {
      const child = fork("./src/config/sum.js");    //llamamos al proceso a forkear
      child.send("start");                          //el padre envía mensaje al hijo
      child.on("message", (response) => {           //cuando el hijo responde
        return res.status(200).json({ response });  //enviamos la respuesta al cliente
      });
    });
  }
}
