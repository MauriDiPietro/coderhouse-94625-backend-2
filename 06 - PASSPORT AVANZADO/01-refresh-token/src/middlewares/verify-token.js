import "dotenv/config";
import jwt from "jsonwebtoken";
import CustomError from "../utils/custom-error.js";
import { userRepository } from "../repositories/user-repository.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken || req.get("Authorization").split(" ")[1];
    if (!token) throw new CustomError("No autorizado", 401);

    jwt.verify(token, process.env.SECRET_KEY, async(error, payload)=>{
      if(error && error.name === 'TokenExpiredError') {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) throw new CustomError("No autorizado", 401);

        const user = await userRepository.getByRefreshToken(refreshToken);
        if(!user) throw new CustomError("No autorizado", 401);

        jwt.verify(refreshToken, process.env.SECRET_KEY, (error, decoded) =>{
          if(error) throw new CustomError('No autorizado', 401);
          const accessToken = userRepository.generateToken(user, '20m');

          res.cookie('accessToken', accessToken, {httpOnly: true});

          req.user = decoded;
          next()
        })
      } else {
        req.user = payload;
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

