import { ProductModel } from "./models/product-model.js";
import MySQLDAO from "./mysql-dao.js";

class ProductDaoMySQL extends MySQLDAO {
    constructor(model){
        super(model);
    }
}

export const productDaoMySQL = new ProductDaoMySQL(ProductModel);