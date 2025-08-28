import express from "express";
import cookieParser from "cookie-parser";
import { initMongoDB } from "./config/db.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { userCustomRouter } from "./routes/user-custom-router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userCustomRouter.getRouter());

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("conectado a mongo"))
  .catch((error) => console.log(error));

app.listen(8080, () => console.log("server ok, puerto 8080"));
