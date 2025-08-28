import "dotenv/config";
import jwt from "jsonwebtoken";
import { Router as CustomRouter } from "express";
import CustomError from "../utils/custom-error.js";

export default class Router {
  constructor() {
    this.router = CustomRouter(); //const router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  // METODO('/PATH', MIDD1, MIDD2, CB)

  get(path, roles, ...cb) {
    this.router.get(path, this.managerRoles(roles), this.resolveCallbacks(cb));
  }

  post(path, roles, ...cb) {
    this.router.post(path, this.managerRoles(roles), this.resolveCallbacks(cb));
  }

  put(path, roles, ...cb) {
    this.router.put(path, this.managerRoles(roles), this.resolveCallbacks(cb));
  }

  delete(path, roles, ...cb) {
    this.router.delete(
      path,
      this.managerRoles(roles),
      this.resolveCallbacks(cb)
    );
  }

  resolveCallbacks(callbacks) {
    return callbacks.map((cb) => async (...params) => {
      try {
        await cb.apply(this, params);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  managerRoles = (roles) => (req, res, next) => {
    try {
      if (roles[0] === "PUBLIC") return next();
      const token = req.cookies.token;
      if (!token) throw new CustomError("No autorizado", 401);
      const user = jwt.verify(token, process.env.SECRET_KEY);
      if (!roles.includes(user.role.toUpperCase()))
        return res
          .status(403)
          .send({ status: "error", error: "No autorizado" });
      req.user = user;
      next();
    } catch (error) {
      throw error;
    }
  };

  successResponse = (res, statusCode, data) => {
    res.status(statusCode).send({ status: "success", data });
  };
}
