import persistence from "../daos/persistence.js";
const { productDao } = persistence;

class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }

  create = async (body) => {
    try {
      return await this.dao.create(body);
    } catch (error) {
      throw new Error(error);
    }
  };

  getAll = async () => {
    try {
      return await this.dao.getAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      return await this.dao.getById(id);
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (id, body) => {
    try {
      return await this.dao.update(id, body);
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (id) => {
    try {
      return await this.dao.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const productRepository = new ProductRepository(productDao);