import { productDao } from "../daos/mongodb/product-dao.js";
import CustomError from "../utils/custom-error.js";

class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = async () => {
    try {
      return await this.dao.getAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      const product = await this.dao.getById(id);
      if (!product) throw new CustomError("Product not found", 404);
      return product;
    } catch (error) {
      throw error;
    }
  };

  create = async (body) => {
    try {
      const newProd = await this.dao.create(body);
      if (!newProd) throw new CustomError("Product creation failed", 400);
      return newProd;
    } catch (error) {
      throw error;
    }
  };

  update = async (id, body) => {
    try {
      const updatedProd = await this.dao.update(id, body);
      if (!updatedProd) throw new CustomError("Product not found", 404);
      return updatedProd;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const deletedProd = await this.dao.delete(id);
      if (!deletedProd) throw new CustomError("Product not found", 404);
      return deletedProd;
    } catch (error) {
      throw error;
    }
  };
}

export const productRepository = new ProductRepository(productDao);
