import { Router } from "express";
import passport from "passport";
import { userController } from "../controllers/user-controllers.js";
import { isAuth } from "../middlewares/is-auth.js";

const router = Router();

router.get("/google", passport.authenticate("google"));

//! |INICIAR CON GOOGLE|
router.get(
  "/oauth2/redirect/accounts.google.com",
  passport.authenticate("google", {
    assingProperty: "user",
    failureRedirect: "/login",
  }),
  userController.googleResponse
);

router.get("/logout", isAuth, userController.logout);

export default router;
