import 'dotenv/config.js'
import { connect } from 'mongoose'
import User from '../User.js'

const users = [{
    email: 'igna@mh.com',
    password: 'hola1234',
    photo: 'photo.jpg',
    role: 0
},{
    email: 'edisson@mh.com',
    password: 'hola1234',
    photo: 'photo.jpg',
    role: 1
}]
async function createUsers(data) {
    await connect(process.env.MONGO_URI)
    await User.insertMany(users)
    console.log('done!');
}

createUsers(users)