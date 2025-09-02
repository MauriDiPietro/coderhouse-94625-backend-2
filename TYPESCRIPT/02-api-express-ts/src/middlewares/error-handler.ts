import { Request, Response } from "express";
import CustomError, { NotFound } from "../utils/custom-error";

export const errorHandler = (error: Error | CustomError, _req: Request, res: Response) => {
  console.log(error);
  if (error instanceof NotFound)
    return res.status(404).json({ message: error.message });
if (error instanceof CustomError)
    return res.status(error.status).json({ message: error.message });
  return res.status(500).json({ message: "Internal Server Error" });
};
