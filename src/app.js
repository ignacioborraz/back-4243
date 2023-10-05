import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import cors from "cors";

import config from "./config/config.js";
import { __dirname } from "../utils.js";
import sessions from "./config/sessions/factory.js";

import winston from "./middlewares/winston.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import inicializePassport from "./middlewares/passport.js";

import IndexRouter from "./routes/index.js";

const router = new IndexRouter();

const server = express();

//middlewares
server.use(cookieParser(config.SECRET_COOKIE));
server.use(sessions);
inicializePassport();
server.use(passport.initialize());
server.use(passport.session());
server.use(cors())
server.use(winston);
server.use("/", express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api", router.getRouter());
server.use(errorHandler);
server.use(notFoundHandler);

//database
//const mongo = new MongoConnect(config.LINK_DB)
//mongo.connect_mongo()

export default server;
