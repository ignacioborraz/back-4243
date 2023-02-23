import mongoose from "mongoose"

let schema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    category_id: { type: mongoose.Types.ObjectId, ref: 'categories', required: true },
},{
    timestamps: true
})

let Book = mongoose.model('books',schema)
export default Book