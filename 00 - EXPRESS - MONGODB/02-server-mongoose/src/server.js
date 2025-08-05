import "dotenv/config";
import express from "express";
import { initMongoDB } from "./config/db-connection.js";
import { errorHandler } from "./middlewares/error-handler.js";
import productRouter from "./routes/product-router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use("/products", productRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
