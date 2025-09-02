import { Schema, model } from "mongoose";
import { ProductInput } from "../types/product-type";

const ProductSchema = new Schema<ProductInput>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export const ProductModel = model("products", ProductSchema);
