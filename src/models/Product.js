import { Schema, Types, model } from "mongoose";

const schema = new Schema(
  {
    name: { type: String, required: true },
    category_id: { type: Types.ObjectId, ref: "categories" },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    is_active: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = model("products", schema);
export default Product;
