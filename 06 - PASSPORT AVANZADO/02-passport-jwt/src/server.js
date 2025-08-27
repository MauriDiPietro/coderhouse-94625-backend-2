import express from "express";
import cookieParser from "cookie-parser";
import config from "./config/config.js";
import { initMongoDB } from "./config/db-connection.js";
import { errorHandler } from "./middlewares/error-handler.js";
import userRouter from "./routes/user-router.js";
import "./middlewares/passport/passport-jwt-headers.js";
import "./middlewares/passport/passport-jwt-cookies.js";
import passport from "passport";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
/* ------------------------------------ - ----------------------------------- */
app.use(passport.initialize());
/* ------------------------------------ - ----------------------------------- */
app.use("/users", userRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("db conectada"))
  .catch((error) => console.log(error));

app.listen(config.PORT, () =>
  console.log(`Server ok en puerto ${config.PORT}`)
);
