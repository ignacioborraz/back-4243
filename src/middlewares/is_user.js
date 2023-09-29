import dao from "../dao/factory.js";
const { User } = dao;
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async function (req, res, next) {
  try {
    const model = new User();
    const { mail } = req.body;
    let one = await model.readOne(mail);
    if (one) {
      req.user = one.response;
      return next();
    } else {
      CustomError.newError(errors.auth);
    }
  } catch (error) {
    return next(error);
  }
}
