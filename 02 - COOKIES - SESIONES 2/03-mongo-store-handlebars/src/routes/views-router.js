import { Router } from "express";
import { validateLogin } from "../middlewares/validate-login.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/error", (req, res) => {
  res.render("error");
});

router.get("/profile", validateLogin, (req, res) => {
  const user = req.session.info.email;
  console.log(user)
  res.render("profile", { user });
});

export default router;
