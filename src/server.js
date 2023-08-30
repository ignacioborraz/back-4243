import server from "./app.js"
import { connect } from "mongoose"

const port = process.env.PORT || 8080

const ready = async()=> {
    try {
        console.log('server ready on port '+port)
        await connect(process.env.MONGO_URI)
        console.log('connected to database')
    } catch (error) {
        console.log(error);
    }
}

server.listen(port,ready)