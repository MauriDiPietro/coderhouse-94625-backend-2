import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();

app.use(cookieParser(process.env.SECRET_KEY));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/set-cookie", (req, res) => {
  res.cookie("idioma", "ingles").json({ msg: "cookie generada con exito" });
});

app.get('/get-cookie', (req, res)=>{
    console.log(req.cookies);
    const { idioma } = req.cookies;
    idioma === 'ingles' ? res.send('Hello!') : res.send('Hola!')
})

app.get("/set-signed-cookie", (req, res) => {
  res.cookie("idioma", "ingles", { signed: true, maxAge: 10000 }).json({ msg: "cookie generada con exito" });
});

app.get('/clear-cookie', (req, res)=>{
    res.clearCookie('idioma').send('cookie eliminada')
})

app.listen(8080, () => console.log("server ok"));
