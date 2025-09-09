import { productDaoFS } from "./filesystem/product-dao.js";
import { productDaoMongo } from "./mongodb/product-dao.js";
import { ConectMongoDB } from "../config/connections/mongo-db.js";

let productDao = null;
// let userDao = null;

let persistence = process.argv[2] || 'fs';

switch (persistence) {
    case 'fs':
        productDao = productDaoFS;
        // userDao = userDaoFS;
        break;
    case 'mongo':
        // initMongoDB().then(()=>console.log('Connected to MongoDB')).catch(err=>console.log(err));
        ConectMongoDB.getInstance();
        productDao = productDaoMongo;
        // userDao = userDaoMongo;
    default:
        break;
}


export default {
    productDao,
    // userDao,
    // cartDao
}