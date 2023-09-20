import passport from "passport";
import jwt from "passport-jwt";
import User from "../db/models/user.model.js";

export default function () {
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    return done(null, user);
  });
  passport.use(
    "jwt",
    new jwt.Strategy(
      {
        jwtFromRequest: jwt.ExtractJwt.fromExtractors([
          (req) => req?.cookies["token"],
        ]),
        secretOrKey: process.env.SECRET_KEY,
      },
      async (payload, done) => {
        try {
          console.log(payload);
          let one = await User.findOne({ mail: payload.mail }, "-password");
          if (one) {
            done(null, one);
          } else {
            done(null);
          }
        } catch (error) {
          console.log(error);
          done(error);
        }
      }
    )
  );
}
