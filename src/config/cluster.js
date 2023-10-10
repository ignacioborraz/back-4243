import cluster from "cluster";
import { cpus } from "os";
import server from "../app.js";

const numberOfProcess = cpus().length;
if (cluster.isPrimary) {
  console.log("primary");
  for (let i = 1; i <= numberOfProcess; i++) {
    cluster.fork();
  }
} else {
  console.log("worker", process.pid);
  server.listen(9000, () => console.log("worker ready on port: ", 9000));
}
