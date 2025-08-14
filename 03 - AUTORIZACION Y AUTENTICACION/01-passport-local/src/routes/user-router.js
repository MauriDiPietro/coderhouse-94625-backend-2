import { Router } from "express";
import passport from "passport";
import { userController } from "../controllers/user-controllers.js";
import { validateLogin } from "../middlewares/validate-login.js";
import { isAdmin } from "../middlewares/is-admin.js";
import { isAuth } from "../middlewares/is-auth.js";

const router = Router();

router.post(
  "/register",
  passport.authenticate("register"),
  userController.registerResponse
);
router.post(
  "/login",
  passport.authenticate("login"),
  userController.loginResponse
);
router.get("/private", isAuth, userController.infoSession);
router.get("/visit", validateLogin, userController.visit);
router.get("/secret-endpoint", validateLogin, userController.infoSession);
router.get(
  "/secret-endpoint-admin",
  validateLogin,
  isAdmin,
  userController.infoSession
);
router.get("/logout", validateLogin, userController.logout);

export default router;
