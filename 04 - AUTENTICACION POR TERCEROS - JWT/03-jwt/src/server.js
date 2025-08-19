import express from "express";
import cookieParser from "cookie-parser";
import { initMongoDB } from "./config/db.js";
import { errorHandler } from "./middlewares/error-handler.js";
import userRouter from "./routes/user-router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("conectado a mongo"))
  .catch((error) => console.log(error));

app.listen(8080, () => console.log("server ok, puerto 8080"));
