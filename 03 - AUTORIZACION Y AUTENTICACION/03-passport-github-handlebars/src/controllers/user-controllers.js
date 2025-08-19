import { userRepository } from "../repositories/user-repository.js";

class UserController {
  constructor(repository) {
    this.repository = repository;
  }

  githubResponse = async (req, res, next) => {
    try {
      res.json({
        message: 'Register/Login Github OK',
        user: req.user
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
