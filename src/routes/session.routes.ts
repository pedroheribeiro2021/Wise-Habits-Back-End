import { Router } from "express"
import { createSessionController } from "../controllers/sessions/session.controller"

export const sessionRoutes = Router()

sessionRoutes.post("", createSessionController)