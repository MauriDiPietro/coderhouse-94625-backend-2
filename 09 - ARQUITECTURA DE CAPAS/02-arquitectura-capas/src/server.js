import express from "express";
import productRouter from "./routes/product-router.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { initMongoDB } from "./config/connections/mongo-db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRouter);

app.use(errorHandler);

process.env.PERSISTENCE === "mongo" &&
  initMongoDB()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.listen(8080, () => console.log("Server running on port 8080"));
