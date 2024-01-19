import { Router } from "express"
import {
  createHabitsController,
  updateHabitsController,
  deleteHabitsController,
  listHabitsController,
} from "../controllers/habits/habits.controller"

export const habitsRoutes = Router()

habitsRoutes.post("", createHabitsController)
habitsRoutes.get("", listHabitsController)
habitsRoutes.patch("", updateHabitsController)
habitsRoutes.delete("", deleteHabitsController)
