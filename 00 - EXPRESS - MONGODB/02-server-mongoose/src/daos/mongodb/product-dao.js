import MongoDao from "./mongo-dao.js";
import { ProductModel } from "./models/product-model.js";

class ProductMongoDao extends MongoDao {
  constructor(model) {
    (model);
  }super

  getByCategory = async (category) => {
    try {
      return await this.model.find({ category });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const productDao = new ProductMongoDao(ProductModel);
