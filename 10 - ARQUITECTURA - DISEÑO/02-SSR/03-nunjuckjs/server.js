import express from "express";
import nunjucks from "nunjucks";

const app = express();

// app.set("view engine", "nunjucks");
// app.set("views", "./views");

nunjucks.configure("./views", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res) => {
  const user = {
    name: "Juan",
  };
  res.render("index.html", { user });
});

app.listen(8080, () => console.log("server ok"));
