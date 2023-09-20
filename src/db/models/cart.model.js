import { model, Schema, Types } from "mongoose";

let collection = "carts";
let schema = new Schema(
  {
    toy_id: { type: Types.ObjectId, ref: "toys", required: true },
    user_id: { type: Types.ObjectId, ref: "users", required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

let Cart = model(collection, schema);
export default Cart;
