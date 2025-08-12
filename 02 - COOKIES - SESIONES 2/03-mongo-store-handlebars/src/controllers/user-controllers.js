import { userRepository } from "../repositories/user-repository.js";

class UserController {
  constructor(repository) {
    this.repository = repository;
  }

  register = async (req, res, next) => {
    try {
      await this.repository.register(req.body);
      return res.redirect('/')
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await this.repository.login(email, password);
      req.session.info = {
        loggedIn: true,
        count: 1,
        email: user.email,
        role: user.role,
      };
      res.redirect('/profile');
    } catch (error) {
      res.render('error', { error })
    }
  };

  infoSession = (req, res, next) => {
    try {
      res.json({
        session: req.session,
        sessionId: req.sessionID,
        cookies: req.cookies,
      });
    } catch (error) {
      next(error);
    }
  };

  visit = (req, res, next) => {
    try {
      req.session.info.count++;
      res.json({
        message: `${req.session.info.email} ha visitado el sitio ${req.session.info.count} veces`,
      });
    } catch (error) {
        next(error)
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

export const userController = new UserController(userRepository)
