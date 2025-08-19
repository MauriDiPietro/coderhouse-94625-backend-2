import { userRepository } from "../repositories/user-repository.js";

class UserController {
  constructor(repository) {
    this.repository = repository;
  }

  googleResponse = async (req, res, next) => {
    try {
      const user = req.user;
      req.login(user, (error) => {
        if (error) next(error);
        else res.redirect("/profile");
      });
    } catch (error) {
      next(error);
    }
  };

  logout = (req, res, next) => {
    try {
      req.session.destroy();
      res.json({ message: "Logout ok" });
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(userRepository);
