import { Router } from "express";
import { checkUserLogged, verifyToken } from "../middlewares/verify-token.js";
const router = Router();

router.get("/login", checkUserLogged, (req, res) => {
  res.render("login");
});

router.get("/current", verifyToken, (req, res) => {
  res.render("current", { user: req.user });
});

export default router;
