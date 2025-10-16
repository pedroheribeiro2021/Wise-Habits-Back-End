import { app } from "../app"
import { AppDataSource } from "../data-source"

let isInitialized = false

import { IncomingMessage, ServerResponse } from "http"

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  if (!isInitialized) {
    try {
      await AppDataSource.initialize()
      console.log("Database connected!")
      isInitialized = true
    } catch (err) {
      console.error("Database connection failed:", err)
      res.statusCode = 500
      res.end("Database connection error")
      return
    }
  }

  // Vercel usa req/res padrão do Node, então precisamos adaptar
  app(req, res)
}
