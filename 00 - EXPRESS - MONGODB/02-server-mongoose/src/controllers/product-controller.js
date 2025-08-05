import { productRepository } from "../repositories/product-repository.js";

class ProductController {
  constructor(repository) {
    this.repository = repository;
  }

  getAll = async (req, res, next) => {
    try {
      const products = await this.repository.getAll();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await this.repository.getById(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const newProduct = await this.repository.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedProduct = await this.repository.update(id, req.body);
      res.status(200).json(updatedProduct);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProduct = await this.repository.delete(id);
      res.status(200).json(deletedProduct);
    } catch (error) {
      next(error);
    }
  };
}

export const productController = new ProductController(productRepository);
