import server from "./app.js";
import options from './config/arguments.js'

//console.log(options);
const PORT = process.env.PORT || options.p
const ready = () => {
    console.log('mode: '+options.mode);
    console.log("server ready on port: " + PORT);
}

server.listen(PORT, ready);
