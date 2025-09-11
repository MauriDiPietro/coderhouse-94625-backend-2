import { ConectMongoDB } from "../config/connections/mongo-db.js";
import { initMySQLDB } from "../config/connections/mysql-db.js";

let productDao = null;
// let userDao = null;

const persistence = process.argv[2] || 'fs';

const initializeDAO = async () =>{
console.log(`PERSISTENCE: ${persistence}`);
    switch (persistence) {
        case 'fs':
            const { productDaoFS } = await import('./filesystem/product-dao.js')
            productDao = productDaoFS;
            // userDao = userDaoFS;
            break;
        case 'mongo':
            ConectMongoDB.getInstance();
            const { productDaoMongo } = await import('./mongodb/product-dao.js')
            productDao = productDaoMongo;
            // userDao = userDaoMongo;
            break;
        case 'mysql':
            initMySQLDB().then(()=>console.log('Connected to MySQL')).catch(err=>console.log(err));
            const { productDaoMySQL } = await import('./mysql/product-dao.js')
            productDao = productDaoMySQL;
            break;
        default:
            throw new Error('Invalid persistence')
    }
}

await initializeDAO();

export default {
    productDao,
    // userDao,
    // cartDao
}