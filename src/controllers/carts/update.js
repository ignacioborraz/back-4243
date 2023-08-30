import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
  try {
    await Cart.findByIdAndUpdate(req.params.id,req.body);
    return res.status(200).json({
      //condicionar si no lo encuentra
      success: true,
      response: "product updated",
    });
  } catch (error) {
    next(error);
  }
}
