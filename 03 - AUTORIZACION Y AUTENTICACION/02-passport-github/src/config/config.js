import "dotenv/config";

export default {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  CLIENT_ID_GITHUB: process.env.CLIENT_ID_GITHUB,
  CLIENT_SECRET_GITHUB: process.env.CLIENT_SECRET_GITHUB,
};
