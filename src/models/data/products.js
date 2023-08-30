import 'dotenv/config.js'
import { connect } from 'mongoose'
import Category from '../Category.js'
import Product from '../Product.js'

const products = [{
    name: 'mesa',
    category_id: 'muebles',
    description: 'desc',
    photo: 'photo_mesa',
    price: 100,
    stock: 4,
    is_active: true
},{
    name: 'celular',
    category_id: 'electrodomesticos',
    description: 'desc',
    photo: 'photo_cel',
    price: 250,
    stock: 152,
    is_active: true
}]

async function createProducts(data) {
    await connect(process.env.MONGO_URI)
    for (let each of data) {
        let category = await Category.findOne({ name:each.category_id })
        each.category_id = category._id
    }
    await Product.insertMany(data)
    console.log('done!');
}

createProducts(products)