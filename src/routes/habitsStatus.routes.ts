import { Router } from "express"
import {
  createHabitsStatusController,
  listHabitsStatusController,
  updatedHabitStatusController,
} from "../controllers/habitsStatus/habitsStatus.controller"
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware"

export const statusRoutes = Router()

statusRoutes.patch(
  "/:id/status",
  ensureAuthMiddleware,
  updatedHabitStatusController,
)
statusRoutes.post(
  "/:id/status",
  ensureAuthMiddleware,
  createHabitsStatusController,
)

statusRoutes.get("/:id/status", listHabitsStatusController)
