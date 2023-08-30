import { Schema, Types, model } from "mongoose";

const schema = new Schema(
  {
    user_id: { type: Types.ObjectId, ref: "users" },
    product_id: { type: Types.ObjectId, ref: "products" },
    state_id: { type: Types.ObjectId, ref: "states" },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Cart = model("carts", schema);
export default Cart;
