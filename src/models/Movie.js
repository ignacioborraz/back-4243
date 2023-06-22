import { Schema,Types,model } from "mongoose"

const collection = 'movies'
const schema = new Schema({
    title: { type:String,required:true },
    capacity: { type:Number,required:true },
    price: { type:Number,required:true,index:true },
    producer: { type:Types.ObjectId,required:true,ref:'users' }
})

const Movie = model(collection,schema)
export default Movie