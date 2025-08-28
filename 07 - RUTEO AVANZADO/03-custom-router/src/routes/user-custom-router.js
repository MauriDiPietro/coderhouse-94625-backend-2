import Router from "./custom-router.js";
import { userController } from "../controllers/user-controller.js";

class UserCustomRouter extends Router {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => {
      this.successResponse(res, 200, "Ruta publica");
    });
    this.post("/register", ["PUBLIC"], userController.register);
    this.post("/login", ["PUBLIC"], userController.login);
    this.get("/private-cookies", ["USER", "ADMIN"], (req, res) => {
      this.successResponse(res, 200, req.user);
    });
    this.get("/private-cookies-admin", ["ADMIN"], (req, res) => {
      this.successResponse(res, 200, req.user);
    });
  }
}

export const userCustomRouter = new UserCustomRouter();
