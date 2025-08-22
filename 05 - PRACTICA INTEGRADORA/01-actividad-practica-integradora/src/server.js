import express from "express";
import 'dotenv/config'
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import { initMongoDB } from "./config/db.js";
import { errorHandler } from "./middlewares/error-handler.js";
import userRouter from "./routes/user-router.js";
import viewsRouter from "./routes/views-router.js";

const app = express();

app.use(express.static(`${process.cwd()}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET_KEY));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", `${process.cwd()}/src/views`);

app.use("/api/users", userRouter);
app.use('/users', viewsRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("conectado a mongo"))
  .catch((error) => console.log(error));

app.listen(8080d () => console.log("server ok, puerto 8080"));
