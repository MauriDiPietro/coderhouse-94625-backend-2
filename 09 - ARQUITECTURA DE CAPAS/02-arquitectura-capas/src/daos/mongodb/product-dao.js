import { ProductModel } from "./models/product-model.js";
import MongoDao from "./mongo-dao.js";

export default class ProductDaoMongo extends MongoDao {
  constructor() {
    super(ProductModel);
  }
}

