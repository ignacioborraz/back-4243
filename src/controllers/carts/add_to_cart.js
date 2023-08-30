import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
  try {
    await Cart.create(req.body);
    //obtener el user_id de passport!!! no de body
    return res.status(201).json({
      success: true,
      response: "product added to your cart",
    });
  } catch (error) {
    next(error);
  }
}
