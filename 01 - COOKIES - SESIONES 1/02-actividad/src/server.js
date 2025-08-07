import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import loginRouter from "./routes/login-router.js";
import viewsRouter from "./routes/views-router.js";

const app = express();

app.use(cookieParser(process.env.SECRET_KEY));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", loginRouter);
app.use("/", viewsRouter);

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.listen(8080, () => console.log("server ok"));
