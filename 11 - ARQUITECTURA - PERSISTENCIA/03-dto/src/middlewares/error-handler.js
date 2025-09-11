import { CustomError } from "../utils/custom-error.js";
import { httpResponse } from "../utils/http-response.js";

export const errorHandler = (error, req, res, next) => {
  console.log(error);
  if (error instanceof CustomError) return httpResponse.CustomError(res, error);
  return httpResponse.ServerError(res, error);
};