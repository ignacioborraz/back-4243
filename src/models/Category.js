import { Schema, Types, model } from "mongoose";

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    admin_id: { type: Types.ObjectId, ref: "users" },
  },
  {
    timestamps: true,
  }
);

const Category = model("categories", schema);
export default Category;
