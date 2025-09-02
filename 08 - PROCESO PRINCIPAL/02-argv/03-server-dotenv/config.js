import dotenv from "dotenv";

const ENV = process.argv[2]?.toUpperCase() || "DEV";

dotenv.config({
  path:
    ENV === "PROD"
      ? "./.env.prod"
      : ENV === "QAS"
      ? "./.env.qas"
      : "./.env.dev",
});

export default {
    ENV,
    PORT: process.env.PORT || 8080,
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/coderhouse"
}