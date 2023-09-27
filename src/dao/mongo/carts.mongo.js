//CAPA DE PERSISTENCIA (mongo)
//es la encargada de realizar el CRUD

import Cart from "./models/cart.model.js";

export default class CartMongo {
  constructor() {}
  async createModel(data) {
    let one = await Cart.create(data);
    return {
      message: "product added!",
      response: { store_id: one._id },
    };
  }
  async filterModels(user_id, state) {
    let all = await Cart.find(
      { user_id, state },
      "toy_id user_id quantity state"
    )
      .populate("user_id", "name mail url_photo")
      .populate("toy_id", "-createdAt -updatedAt -__v");
    if (all.length > 0) {
      return {
        message: "products found!",
        response: { products: all },
      };
    } else {
      return null;
    }
  }
  async updateModel(id, data) {
    let one = await Cart.findByIdAndUpdate(id, data, { new: true })
      .select("toy_id user_id quantity state")
      .populate("user_id", "name mail url_photo")
      .populate("toy_id", "-createdAt -updatedAt -__v");
    if (one) {
      return {
        message: "product updated!",
        response: { product: one },
      };
    } else {
      return null;
    }
  }
  async destroyModel(id) {
    let one = await Cart.findByIdAndDelete(id)
      .select("toy_id user_id quantity state")
      .populate("user_id", "name mail url_photo")
      .populate("toy_id", "-createdAt -updatedAt -__v");
    if (one) {
      return {
        message: "product removed!",
        response: { product: one },
      };
    } else {
      return null;
    }
  }
}
