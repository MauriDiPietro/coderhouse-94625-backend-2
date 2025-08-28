import 'dotenv/config'
import { connect } from "mongoose";

export const initMongoDB = async () => {
  try {
    await connect(process.env.MONGO_URL);
  } catch (error) {
    throw new Error("Error al conectar a la base de datos");
  }
};
