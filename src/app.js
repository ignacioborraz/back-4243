import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import cors from "cors"

import config from "./config/config.js";
import { __dirname } from "./config/utils.js";
import MongoConnect from "./config/Mongo.js";

import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import inicializePassport from "./middlewares/passport.js";

import IndexRouter from "./routes/index.js";
const router = new IndexRouter();

const server = express();

//middlewares
server.use(cookieParser(config.SECRET_COOKIE));
server.use(
  expressSession({
    store: MongoStore.create({
      mongoUrl: config.LINK_DB,
      ttl: 60 * 60 * 24 * 7,
    }),
    secret: config.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
  })
);
inicializePassport();
server.use(passport.initialize());
server.use(passport.session());
server.use(cors())
server.use(morgan("dev"));
server.use("/", express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api", router.getRouter());
server.use(errorHandler);
server.use(notFoundHandler);

//database
const mongo = new MongoConnect(config.LINK_DB)
mongo.connect_mongo()

export default server;
