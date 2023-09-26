import { compareSync } from "bcrypt";
import User from "../dao/mongo/models/user.model.js";

export default async function (req, res, next) {
  let password_from_form = req.body.password;
  let user = await User.findOne({ mail: req.body.mail });
  let password_hash = user.password;
  let verified = compareSync(password_from_form, password_hash);
  if (verified) {
    return next();
  } else {
    return res.status(400).json({
      method: req.method,
      path: req.url,
      message: "invalid credentials",
      response: null,
    });
  }
}
