import args from "../arguments.js";
import expressSession from "express-session";
import sessionFileStore from "session-file-store";
import MongoStore from "connect-mongo";
import config from "../config.js";

let sessions = null;

switch (args.persistence) {
  case "MEMORY":
    sessions = expressSession({
      secret: process.env.SECRET_SESSION,
      resave: true,
      saveUninitialized: true,
    });
    break;
  case "FS":
    const FileStore = sessionFileStore(expressSession);
    sessions = expressSession({
      store: new FileStore({
        path: "./src/config/sessions/files",
        ttl: 60 * 60 * 24 * 7,
        retries: 0,
      }),
      secret: process.env.SECRET_SESSION,
      resave: true,
      saveUninitialized: true,
    });

    break;
  default: //"MONGO"
    sessions = expressSession({
      store: MongoStore.create({
        mongoUrl: config.LINK_DB,
        ttl: 60 * 60 * 24 * 7,
      }),
      secret: config.SECRET_SESSION,
      resave: true,
      saveUninitialized: true,
    });
    break;
}

export default sessions;
