import "dotenv/config";
import jwt from "jsonwebtoken";
import CustomError from "../utils/custom-error.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token =
      req.signedCookies?.currentUser || req.get("Authorization").split(" ")[1];
    if (!token) throw new CustomError("No autorizado", 401);
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

export const checkUserLogged = (req, res, next) => {
  try {
    const token = req.signedCookies?.currentUser;
    if (!token) return next();
    jwt.verify(token, process.env.SECRET_KEY);
    res.redirect("/users/current");
  } catch (error) {
    res.clearCookie("currentUser", { signed: true });
    next(error);
  }
};
