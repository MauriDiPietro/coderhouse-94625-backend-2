import { Router } from "express";
import { userController } from "../controllers/user-controller.js";
import { checkAuthCookie, checkAuthHeader } from "../middlewares/check-auth.js";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get("/private-cookies", checkAuthCookie, (req, res) =>
  res.send(req.user)
);
router.get("/private-headers", checkAuthHeader, (req, res) =>
  res.send(req.user)
);

export default router;
