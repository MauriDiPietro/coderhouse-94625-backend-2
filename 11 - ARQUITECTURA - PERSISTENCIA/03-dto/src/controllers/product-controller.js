import { ProductRequestDTO } from "../dtos/products/request-dto.js";
import { productService } from "../services/product-service.js";
import { asyncHandler } from "../utils/async-handler.js";
import { httpResponse } from "../utils/http-response.js";

class ProductController {
  constructor(service) {
    this.service = service;
  }

  getAll = asyncHandler(async (req, res) => {
    const response = await this.service.getAll();
    return httpResponse.Ok(res, response);
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const response = await this.service.getById(id);
    return httpResponse.Ok(res, response);
  });

  create = asyncHandler(async (req, res) => {
    const product = new ProductRequestDTO(req.body);
    const response = await this.service.create(product);
    return httpResponse.Created(res, response);
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = new ProductRequestDTO(req.body);
    const response = await this.service.update(id, product);
    return httpResponse.Ok(res, response);
  });

  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const response = await this.service.delete(id);
    return httpResponse.Ok(res, response);
  });
}

export const productController = new ProductController(productService);
