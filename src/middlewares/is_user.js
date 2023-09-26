import User from "../dao/mongo/models/user.model.js";

export default async function (req, res, next) {
  try {
    const { mail } = req.body;
    let one = await User.findOne({ mail }, "-password");
    if (one) {
      req.user = one;
      return next();
    } else {
      return res.status(400).json({
        method: req.method,
        path: req.url,
        message: "invalid credentials",
        response: null,
      });
    }
  } catch (error) {
    return next(error);
  }
}
