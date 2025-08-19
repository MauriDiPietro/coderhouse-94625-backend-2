import express from "express";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import handlebars from "express-handlebars";
import config from "./config/config.js";
import "./middlewares/passport/passport-github.js";
import { initMongoDB } from "./config/db-connection.js";
import { errorHandler } from "./middlewares/error-handler.js";
import userRouter from "./routes/user-router.js";
import viewsRouter from "./routes/views-router.js";

const app = express();

const sessionConfig = {
  store: MongoStore.create({
    mongoUrl: config.MONGO_URL,
    crypto: {
      secret: config.SECRET_KEY,
    },
    ttl: 60,
  }),
  secret: config.SECRET_KEY,
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: 60000,
  },
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(sessionConfig));

app.engine("handlebars", handlebars.engine());
app.set("views", `${process.cwd()}/src/views`);
app.set("view engine", "handlebars");
/* ------------------------------------ - ----------------------------------- */
app.use(passport.initialize());
app.use(passport.session());
/* ------------------------------------ - ----------------------------------- */
app.use("/users", userRouter);
app.use("/", viewsRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("db conectada"))
  .catch((error) => console.log(error));

app.listen(config.PORT, () =>
  console.log(`Server ok en puerto ${config.PORT}`)
);
