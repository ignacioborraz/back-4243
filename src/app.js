import config from "./config/config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import { __dirname } from "./config/utils.js";
import MongoConnect from "./config/Mongo.js";

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
server.use(cors());
server.use("/api", router.getRouter());
server.use(errorHandler);
server.use(notFoundHandler);

//database
const mongo = new MongoConnect(config.link_db);
mongo.connect_db();

export default server;
