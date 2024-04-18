import { Router } from "express"
import {
  createHabitsController,
  updateHabitsController,
  deleteHabitsController,
  listHabitsController,
  updateHabitWeekDaysController,
} from "../controllers/habits/habits.controller"
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware"

export const habitsRoutes = Router()

habitsRoutes.post("", ensureAuthMiddleware, createHabitsController)
habitsRoutes.get("", listHabitsController)
habitsRoutes.patch("/:id", ensureAuthMiddleware, updateHabitsController)
habitsRoutes.delete("/:id", ensureAuthMiddleware, deleteHabitsController)

habitsRoutes.patch("/:id/weekDays", updateHabitWeekDaysController)
