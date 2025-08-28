import "dotenv/config";
import jwt from "jsonwebtoken";
import CustomError from "../utils/custom-error.js";

export const checkAuthHeader = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) throw new CustomError("No autorizado", 401);
    // Bearer sdfkjsdfhjksdfhsdjfsjkdfhsdjkfhsdkjfhsdkf
    const token = authHeader.split(" ")[1];
    // ["Bearer", "sdfkjsdfhjksdfhsdjfsjkdfhsdjkfhsdkjfhsdkf"]
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

export const checkAuthCookie = async (req, res, next) => {
  try {
    const tokenCookie = req.cookies.token;
    if (!tokenCookie) throw new CustomError("No autorizado", 401);
    const payload = jwt.verify(tokenCookie, process.env.SECRET_KEY);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};
