import { userRepository } from "../repositories/user-repository.js";

class UserController {
  constructor(repository) {
    this.repository = repository;
  }

  register = async (req, res, next) => {
    try {
      const response = await this.repository.register(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await this.repository.login(email, password);
      const accessToken = this.repository.generateToken(user);
      /* ------------------------------------ HEADERS ----------------------------------- */
      // res.header("Authorization", accessToken).json({ user, accessToken });
      /* --------------------------------- COOKIES -------------------------------- */
      res.cookie('accessToken', accessToken, { httpOnly: true }).json({ user, accessToken });
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(userRepository);
