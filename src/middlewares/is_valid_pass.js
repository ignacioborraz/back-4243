import { compareSync } from "bcrypt";
import dao from "../dao/factory.js";
const { User } = dao;
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async function (req, res, next) {
  let password_from_form = req.body.password;
  const model = new User();
  let user = await model.readOne(req.body.mail);
  let password_hash = user.response.password;
  if (password_hash) {
    let verified = compareSync(password_from_form, password_hash);
    if (verified) {
      return next();
    }
  }
  CustomError.newError(errors.auth);
}
