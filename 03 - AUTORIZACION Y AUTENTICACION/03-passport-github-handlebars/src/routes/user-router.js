import { Router } from "express";
import passport from "passport";
import { userController } from "../controllers/user-controllers.js";
// import { validateLogin } from "../middlewares/validate-login.js";
// import { isAdmin } from "../middlewares/is-admin.js";
import { isAuth } from "../middlewares/is-auth.js";
import { passportCall } from "../middlewares/passport/passport-call.js";

const router = Router();

//! |INICIAR CON GITHUB|
router.get(
  "/register-github",
  passportCall("github", { scope: ["user:email"] })
);

router.get(
  "/profile-github",
  passport.authenticate("github", {
    failureRedirect: "/login", ///error-github
    successRedirect: "/profile", //--> viewsRouter
    passReqToCallback: true,
  })
);

router.get("/logout", isAuth, userController.logout);

export default router;
