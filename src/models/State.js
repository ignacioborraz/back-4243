import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const State = model("states", schema);
export default State;
