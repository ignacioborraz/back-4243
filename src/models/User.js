import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const User = model("users", schema);
export default User;
