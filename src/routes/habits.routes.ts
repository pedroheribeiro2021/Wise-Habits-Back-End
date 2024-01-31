import { Router } from "express"
import {
  createHabitsController,
  updateHabitsController,
  deleteHabitsController,
  listHabitsController,
  updateHabitWeekDaysController,
} from "../controllers/habits/habits.controller"

export const habitsRoutes = Router()

habitsRoutes.post("", createHabitsController)
habitsRoutes.get("", listHabitsController)
habitsRoutes.patch("/:id", updateHabitsController)
habitsRoutes.delete("/:id", deleteHabitsController)

habitsRoutes.patch("/:id/weekDays", updateHabitWeekDaysController)
