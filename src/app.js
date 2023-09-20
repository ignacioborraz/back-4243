import config from "./config/config.js";
import express from "express";
import morgan from "morgan";
import { connect } from "mongoose";

import { __dirname } from "./config/utils.js";

import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

import IndexRouter from "./routes/index.js";
const router = new IndexRouter();

const server = express();

//middlewares
server.use(morgan("dev"));
server.use("/", express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api", router.getRouter());
server.use(errorHandler);
server.use(notFoundHandler);

//database
connect(config.link_db)
  .then(() => console.log("database: connected"))
  .catch((err) => console.log(err));

export default server;
