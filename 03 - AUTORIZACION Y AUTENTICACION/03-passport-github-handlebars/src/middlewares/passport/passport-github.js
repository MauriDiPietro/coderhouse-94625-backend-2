import passport from "passport";
import { Strategy } from "passport-github2";
import config from "../../config/config.js";
import { userRepository } from "../../repositories/user-repository.js";

const strategyConfig = {
  clientID: config.CLIENT_ID_GITHUB,
  clientSecret: config.CLIENT_SECRET_GITHUB,
  callbackURL: "http://localhost:8080/users/profile-github",
};

const registerOrLogin = async (_accessToken, _refreshToken, profile, done) => {
  console.log(profile);
  try {
    const email = profile._json.email;
    if (!email) throw new Error("No posee email publico");
    const user = await userRepository.getUserByEmail(email);
    if (user) return done(null, user);
    const last_name =
      profile._json.name.split(" ").length > 2
        ? `${profile._json.name.split(" ")[1]} ${
            profile._json.name.split(" ")[2]
          }`
        : profile._json.name.split(" ")[1];
    const newUser = await userRepository.register({
      first_name: profile._json.name.split(" ")[0],
      //'Mauri Di Pietro' = ['Mauri', 'Di', 'Pietro']
      last_name,
      email,
      password: " ",
      isGithub: true,
      image: profile._json.avatar_url
    });
    return done(null, newUser);
  } catch (error) {
    return done(error, false, { messages: error.message });
  }
};

const githubStrategy = new Strategy(strategyConfig, registerOrLogin);

passport.use("github", githubStrategy);

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
