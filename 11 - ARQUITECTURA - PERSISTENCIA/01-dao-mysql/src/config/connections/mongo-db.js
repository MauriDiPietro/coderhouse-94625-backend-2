import { connect } from "mongoose";

export class ConectMongoDB {
  static #instance;

  constructor() {
    connect(process.env.MONGO_URL);
  }

  static getInstance() {
    if (this.#instance) {
      console.log("ya está conectado a mongodb");
      return this.#instance;
    }
    this.#instance = new ConectMongoDB();
    console.log("Conectado a MongoDB!");
    return this.#instance;
  }
}
