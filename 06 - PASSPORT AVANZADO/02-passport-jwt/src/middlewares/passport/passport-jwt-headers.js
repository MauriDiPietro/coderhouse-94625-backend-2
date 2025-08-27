import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import config from "../../config/config.js";

const strategyConfigHeaders = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET_KEY,
};

const verifyToken = async (jwt_payload, done) => {
  // req.user = jwt_payload
  if (!jwt_payload) return done(null, false, { messages: "User not found" });
  return done(null, jwt_payload);
};

passport.use('jwt', new Strategy(strategyConfigHeaders, verifyToken));


