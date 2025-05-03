import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }
  console.error("unhandled error", err.message);
  console.error("url: ", req.originalUrl);
  console.error("method: ", req.method);
  res.status(500).json({
    success: false,
    message: "internal server error, please try again",
  });
};
