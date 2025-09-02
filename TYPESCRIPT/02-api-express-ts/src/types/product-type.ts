import { Document } from "mongoose";

// export interface Product {
//     name: string;
//     description: string;
//     price: number;
//     stock: number;
// }

export type ProductInput = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

export type ProductDB = ProductInput & Document;

