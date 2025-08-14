import { Router } from "express";
import passport from "passport";
import { userController } from "../controllers/user-controllers.js";
// import { validateLogin } from "../middlewares/validate-login.js";
// import { isAdmin } from "../middlewares/is-admin.js";
// import { isAuth } from "../middlewares/is-auth.js";
import { passportCall } from "../middlewares/passport/passport-call.js";

const router = Router();

//! |INICIAR CON GITHUB|
router.get(
  "/register-github",
  passportCall('github', { scope: ['user:email'] }),
);

router.get(
  "/profile-github",
  passportCall('github', { scope: ['user:email'] }),
  userController.githubResponse
);
// router.get("/private", isAuth, userController.infoSession);
// router.get("/visit", validateLogin, userController.visit);
// router.get("/secret-endpoint", validateLogin, userController.infoSession);
// router.get(
//   "/secret-endpoint-admin",
//   validateLogin,
//   isAdmin,
//   userController.infoSession
// );
// router.get("/logout", validateLogin, userController.logout);

export default router;
