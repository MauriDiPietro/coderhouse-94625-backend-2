import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import config from "../../config/config.js";
import { userRepository } from "../../repositories/user-repository.js";

const strategyConfig = {
  clientID: config.CLIENT_ID_GOOGLE,
  clientSecret: config.CLIENT_SECRET_GOOGLE,
  callbackURL: "/users/oauth2/redirect/accounts.google.com",
  scope: ["profile", "email"],
  state: true,
};

const registerOrLogin = async (_accessToken, _refreshToken, profile, done) => {
  console.log(profile);
  /*
  _json: {
    sub: '101944531757156243408',
    name: 'Jose Mauricio Di Pietro',
    given_name: 'Jose Mauricio',
    family_name: 'Di Pietro',
    picture: 'https://lh3.googleusercontent.com/a/ACg8ocKmE995SDQP3fga4-ngGxD-LNFJTmv-uJqFNeKo2P7mk5z08dkBeA=s96-c',
    email: 'dipietro.jm@gmail.com',
    email_verified: true
  }
  */
  try {
    const email = profile._json.email;
    if (!email) throw new Error("No posee email publico");
    const user = await userRepository.getUserByEmail(email);
    if (user) return done(null, user);
    const first_name = profile._json.given_name;
    const last_name = profile._json.family_name;
    const image = profile._json.picture;
    const newUser = await userRepository.register({
      first_name,
      last_name,
      email,
      password: " ",
      image,
      isGoogle: true,
    });
    return done(null, newUser);
  } catch (error) {
    return done(error, false, { messages: error.message });
  }
};

const googleStrategy = new Strategy(strategyConfig, registerOrLogin);

passport.use("google", googleStrategy);

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
