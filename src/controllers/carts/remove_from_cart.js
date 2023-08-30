import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      //condicionar si no lo encuentra
      success: true,
      response: "product removed from cart",
    });
  } catch (error) {
    next(error);
  }
}
