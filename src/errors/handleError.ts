import { Request, Response, NextFunction } from "express"
import { AppError } from "./AppError"

export const handleError = (
  error: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    console.log(error)
    return res.status(error.statusCode).json({
      message: error.message,
    })
  }

  console.log(error)

  return res.status(500).json({
    message: "Internal server error",
  })
}
