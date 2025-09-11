import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASS,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    logging: false,
  }
);

export const initMySQLDB = async () => {
  try {
    await db.authenticate();
  } catch (error) {
    throw new Error(error);
  }
};
