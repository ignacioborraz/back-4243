import 'dotenv/config.js'
import { connect } from 'mongoose'
import Category from '../Category.js'
import User from '../User.js'

const categories = [{
    name: 'muebles',
    description: 'de madera',
    photo: 'photo_muebles.jpg',
    admin_id: 'edisson@mh.com'
},{
    name: 'electrodomesticos',
    description: 'articulos electronicos',
    photo: 'photo_electro.jpg',
    admin_id: 'edisson@mh.com'
}]

async function createCategories(data) {
    await connect(process.env.MONGO_URI)
    for (let each of data) {
        let admin = await User.findOne({ email:each.admin_id })
        each.admin_id = admin._id
    }
    await Category.insertMany(data)
    console.log('done!');
}

createCategories(categories)