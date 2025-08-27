import jwt from "jsonwebtoken";
import CustomError from "../utils/custom-error.js";
import { createHash, isValidPass } from "../utils/user-utils.js";
import { userDao } from "../daos/user-dao.js";

class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getUserByEmail = async (email) => {
    try {
      return await this.dao.getUserByEmail(email);
    } catch (error) {
      throw error;
    }
  };

  getUserById = async (id) => {
    try {
      return await this.dao.getById(id);
    } catch (error) {
      throw error;
    }
  };

  register = async (body) => {
    try {
      const { email, password } = body;
      const existUser = await this.getUserByEmail(email);
      if (existUser) throw new CustomError("El usuario ya existe", 400);
      const response = await this.dao.create({
        ...body,
        password: createHash(password),
      });
      if (!response)
        throw new CustomError("Error al registrar al usuario", 400);
      return response;
    } catch (error) {
      throw error;
    }
  };

  login = async (email, password) => {
    try {
      const userExist = await this.getUserByEmail(email);
      if (!userExist) throw new CustomError("Credenciales incorrectas", 400);
      const isValid = isValidPass(password, userExist.password);
      if (!isValid) throw new CustomError("Credenciales incorrectas", 400);
      return userExist;
    } catch (error) {
      throw error;
    }
  };

  generateToken = (user) => {
    const payload = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role,
    };

    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "20m",
    });
  };
}

export const userRepository = new UserRepository(userDao);
