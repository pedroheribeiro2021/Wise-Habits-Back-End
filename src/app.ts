import "express-async-errors";
import { handleError } from "./errors/handleError"
import express, { Application } from 'express'
import cors from "cors";

export const app: Application = express()
app.use(express.json())
app.use(cors())

app.use(handleError)