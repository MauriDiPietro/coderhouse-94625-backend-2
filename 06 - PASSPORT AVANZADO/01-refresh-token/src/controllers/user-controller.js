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
      const token = this.repository.generateToken(user, "20m");
      const refreshToken = this.repository.generateToken(user, "24h");
      await this.repository.update(user._id, { refreshToken });
      /* ------------------------------------ HEADERS ----------------------------------- */
      // res.header("Authorization", token).json({ user, token });
      /* --------------------------------- COOKIES -------------------------------- */
      res.cookie("accessToken", token, { httpOnly: true }); //20min
      res.cookie("refreshToken", refreshToken, { httpOnly: true }); //7 días
      res.json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(userRepository);
