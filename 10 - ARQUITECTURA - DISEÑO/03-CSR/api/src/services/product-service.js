import { productRepository } from "../repositories/product-repostory.js";
import { CustomError } from "../utils/custom-error.js";

class ProductService {
  constructor(repository) {
    this.repository = repository;
  }

  create = async (body) => {
    try {
      const response = await this.repository.create(body);
      if (!response) throw new CustomError("Error creating product", 400);
      return response;
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      const response = await this.repository.getAll();
      if (!response.length) throw new CustomError("No products found", 404);
      return response;
    } catch (error) {
      throw error;
    }
  };

  getById = async (id) => {
    try {
      const response = await this.repository.getById(id);
      if (!response) throw new CustomError("Product not found", 404);
      return response;
    } catch (error) {
      throw error;
    }
  };

  update = async (id, body) => {
    try {
      const response = await this.repository.update(id, body);
      if (!response) throw new CustomError("Error updating product", 400);
      return response;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const response = await this.repository.delete(id);
      if (!response) throw new CustomError("Error delete product", 400);
      return response;
    } catch (error) {
      throw error;
    }
  };
}


export const productService = new ProductService(productRepository);