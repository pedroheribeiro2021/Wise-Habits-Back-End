import { Router } from "express"
import {
  createHabitsStatusController,
  listHabitsStatusController,
  updatedHabitStatusController,
} from "../controllers/habitsStatus/habitsStatus.controller"

export const statusRoutes = Router()

statusRoutes.post("/:id/status", createHabitsStatusController)
statusRoutes.get("/:id/status", listHabitsStatusController)
statusRoutes.patch("/:id/status", updatedHabitStatusController)
