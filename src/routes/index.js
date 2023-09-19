import MyRouter from "./router.js";
import ToysRouter from "./api/toys.router.js";

const toys = new ToysRouter();

export default class IndexRouter extends MyRouter {
  init() {
    this.read("/", (req, res) => res.status(200).send("TOY STORE API"));
    this.use("/toys", toys.getRouter());
  }
}
