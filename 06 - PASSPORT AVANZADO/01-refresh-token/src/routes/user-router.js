import { Router } from "express";
import { userController } from "../controllers/user-controller.js";
import { verifyToken } from "../middlewares/verify-token.js";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get("/private", verifyToken, (req, res) =>
  res.send(req.user)
);

export default router;
