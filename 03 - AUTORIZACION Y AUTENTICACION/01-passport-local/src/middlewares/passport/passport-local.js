import passport from "passport";
import { Strategy } from "passport-local";
import { userRepository } from "../../repositories/user-repository.js";

const strategyConfig = {
  usernameField: "email",
  passwordField: "password",
  passReqToCallback: true,
};

const register = async (req, email, password, done) => {
  try {
    const newUser = await userRepository.register(req.body);
    return done(null, newUser);
  } catch (error) {
    return done(error, false, { messages: error.message });
  }
};

const login = async (req, email, password, done) => {
  try {
    const user = await userRepository.login(email, password);
    return done(null, user);
  } catch (error) {
    return done(error, false, { messages: error.message });
  }
};

const registerStrategy = new Strategy(strategyConfig, register);
const loginStrategy = new Strategy(strategyConfig, login);

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);

//req.session.passport.user = user._id

passport.serializeUser((user, done) => {
  try {
    done(null, user._id); //--> req.session.passport.user
  } catch (error) {
    done(error);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userRepository.getUserById(id);
    return done(null, user);
  } catch (error) {
    done(error);
  }
});
