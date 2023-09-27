import { model, Schema } from "mongoose";

let collection = "users";
let schema = new Schema(
  {
    name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    url_photo: { type: String, required: true },
    role: { type: Number, default: 0 },
  },
  { timestamps: true }
);

let User = model(collection, schema);
export default User;
