//db --> dao --> repository --> service --> controller --> route

import { Router } from 'express'
import ProductDaoMongo from '../daos/mongodb/product-dao.js'
import ProductDaoFS from '../daos/filesystem/product-dao.js'
import ProductRepository from '../repositories/product-repostory.js'
import ProductService from '../services/product-service.js'
import ProductController from '../controllers/product-controller.js'

const router = Router()

const PERSISTENCE = process.env.PERSISTENCE

const dao = PERSISTENCE === 'mongo' ? new ProductDaoMongo() : new ProductDaoFS()

const repository = new ProductRepository(dao);

const service = new ProductService(repository);

const controller = new ProductController(service);

router.route('/')
    .get(controller.getAll)
    .post(controller.create)

router.route('/:id')
    .get(controller.getById)
    .put(controller.update)
    .delete(controller.delete)

export default router;