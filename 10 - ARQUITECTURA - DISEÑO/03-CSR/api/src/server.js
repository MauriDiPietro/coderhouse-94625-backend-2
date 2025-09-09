import express from "express";
import cors from 'cors'
import productRouter from "./routes/product-router.js";
import { errorHandler } from "./middlewares/error-handler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONT_URL, methods: ['GET'] }))

app.use("/products", productRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("Server running on port 8080"));
