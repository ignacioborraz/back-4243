import dotenv from "dotenv";
import options from "./arguments.js";

const environment = options.mode;
const env =
  environment === "development" ? "./.env.development" : "./.env.production";
dotenv.config({
  path: env,
});

export default {
  link_db: process.env.LINK_DB,
  secret_cookie: process.env.SECRET_COOKIE,
  secret_session: process.env.SECRET_SESSION,
  secret_key: process.env.SECRET_KEY,
};
