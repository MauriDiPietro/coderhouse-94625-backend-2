import { Router } from "express";
import { userController } from "../controllers/user-controllers.js";
import { passportCall } from "../middlewares/passport/passport-call.js";
import { roleAuth } from "../middlewares/role-auth.js";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

/* --------------------------------- HEADERS -------------------------------- */
router.get(
  "/private",
  passportCall("jwt", { session: false }),
  // roleAuth("USER"),
  (req, res) => res.send(req.user)
);

router.get(
  "/private-admin",
  passportCall("jwt", { session: false }),
  roleAuth("ADMIN"),
  (req, res) => res.send(req.user)
);

/* ------------------------------------ COOKIES ----------------------------------- */

router.get(
  "/private-cookies",
  passportCall("jwtCookies", { session: false }),
  roleAuth("USER"),
  (req, res) => res.send(req.user)
);

router.get(
  "/private-admin",
  passportCall("jwtCookies", { session: false }),
  roleAuth("ADMIN"),
  (req, res) => res.send(req.user)
);

export default router;
