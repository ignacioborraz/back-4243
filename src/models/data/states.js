import 'dotenv/config.js'
import { connect } from 'mongoose'
import State from '../State.js'

const states = [{
    name: 'solicitado',
    description: 'articulo agregado al carrito pero no pagado'
},{
    name: 'pendiente',
    description: 'articulo pagado y en espera de envío'
},{
    name: 'enviado',
    description: 'articulo entregado al cliente'
}]

async function createState(data) {
    await connect(process.env.MONGO_URI)
    await State.insertMany(data)
    console.log('done!');
}

createState(states)