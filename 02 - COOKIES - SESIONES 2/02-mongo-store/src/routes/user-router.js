import { Router } from "express";
import { userController } from "../controllers/user-controllers.js";
import { validateLogin } from "../middlewares/validate-login.js";
import { isAdmin } from "../middlewares/is-admin.js";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/visit", validateLogin, userController.visit);
router.get("/secret-endpoint", validateLogin, userController.infoSession);
router.get("/secret-endpoint-admin", validateLogin, isAdmin, userController.infoSession);
router.get("/logout", validateLogin, userController.logout);

export default router;
