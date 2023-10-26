import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";

import config from "./config/config.js";
import { __dirname } from "../utils.js";
import sessions from "./config/sessions/factory.js";
import swaggerOptions from "./config/swagger.js";

import winston from "./middlewares/winston.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import inicializePassport from "./middlewares/passport.js";

import IndexRouter from "./routes/index.js";

const router = new IndexRouter();

const server = express();

const specs = swaggerJSDoc(swaggerOptions)

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
server.use("/docs",serve,setup(specs))
server.use("/api", router.getRouter());
server.use(errorHandler);
server.use(notFoundHandler);

export default server;
