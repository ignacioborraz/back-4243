import { createTransport } from "nodemailer";
import program from "./arguments.js";
import config from "./config.js";

const port = process.env.PORT || program.p

export default createTransport({
    service: 'gmail',
    port,
    auth: {
        user: config.G_MAIL,
        pass: config.G_PASS
    }
})