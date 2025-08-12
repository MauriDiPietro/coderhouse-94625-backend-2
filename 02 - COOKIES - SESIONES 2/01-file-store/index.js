//npm i session-file-store

import express from "express";
import session from "express-session";
import sessionFileStore from 'session-file-store';
import cookieParser from "cookie-parser";
import "dotenv/config";
import { validateLogin } from "./middlewares/validate-login.js";
import { isAdmin } from "./middlewares/is-admin.js";

const app = express();

const FileStore = sessionFileStore(session)

app.use(express.json());
app.use(cookieParser());

const sessionConfig = {
  store: new FileStore({
    path: './sessions',
    ttl: 60,
    reapInterval: 30
  }),
  secret: process.env.SECRET_KEY,
  cookie: { maxAge: 60000 },
  saveUninitialized: true,
  resave: false,
};

app.use(session(sessionConfig));

const users = [
  {
    username: "Juan",
    password: "1234",
    admin: true,
  },
  {
    username: "Carlos",
    password: "1234",
    admin: false,
  },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const index = users.findIndex(
    (user) => user.username === username && user.password === password
  );
  if (index < 0)
    return res.status(400).json({ msg: "credenciales incorrectas" });
  const user = users[index];
  req.session.info = {
    loggedIn: true,
    count: 1,
    admin: user.admin,
  };
  // req.session.loggedIn = true
  // req.session.count = 1
  // req.session.admin = user.admin
  return res.json({ msg: "Bienvenido/a" });
});

app.get("/secret-endpoint", validateLogin, (req, res) => {
  req.session.info.count++;
  res.json({
    session: req.session,
  });
});

app.get("/secret-endpoint-admin", validateLogin, isAdmin, (req, res) => {
  req.session.info.count++;
  res.json({
    session: req.session,
  });
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ msg: "logout ok" });
});

app.get("/", (req, res) => {
  const { nombre } = req.query;

  if (nombre) req.session.nombre = nombre;

  req.session.contador = req.session.contador ? req.session.contador + 1 : 1;

  const mensaje = req.session.nombre
    ? `Bienvenido/a ${req.session.nombre}!`
    : "Bienvenido/a!";

  res.json({
    mensaje,
    contador: req.session.contador,
  });
});

app.listen(8080, () => console.log("server ok"));
