import { Request, Response } from "express"
import { createHabitsStatusService } from "../../services/habitsStatus/createListHabitsStatus.service"
import { listHabitsStatus } from "../../services/habitsStatus/listHabitsStatus.service"
import { updateHabitStatusService } from "../../services/habitsStatus/updateHabitsStatus.service"

export const createHabitsStatusController = async (
  req: Request,
  res: Response,
) => {
  const habitId = req.params.id // Pega o ID do hábito da URL
  const statusData = req.body

  const newStatus = await createHabitsStatusService(habitId, statusData)
  return res.status(201).json(newStatus)
}

export const listHabitsStatusController = async (
  req: Request,
  res: Response,
) => {
  const habits = await listHabitsStatus()
  return res.json(habits)
}

export const updatedHabitStatusController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const { statusValue } = req.body

  const status = await updateHabitStatusService(id, statusValue)

  return res.status(200).json(status)
}
