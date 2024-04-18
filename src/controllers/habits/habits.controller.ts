import { Request, Response } from "express"
import { IHabitsRequest } from "../../interfaces/habits.interface"
import { createHabitsService } from "../../services/habits/createHabits.service"
import { listHabitsService } from "../../services/habits/listHabits.service"
import { updateHabitsService } from "../../services/habits/updateHabits.service"
import { deleteHabitsService } from "../../services/habits/deleteHabits.service"
import { updateHabitWeekDaysService } from "../../services/habits/weekDays.service"

export const createHabitsController = async (req: Request, res: Response) => {
  const habitsData: IHabitsRequest = req.body
  habitsData.userId = req.user.id // Adicione o ID do usuário aqui

  const newHabit = await createHabitsService(habitsData)
  return res.status(201).json(newHabit)
}

export const listHabitsController = async (req: Request, res: Response) => {
  const habits = await listHabitsService()
  return res.json(habits)
}

export const updateHabitWeekDaysController = async (
  req: Request,
  res: Response,
) => {
  const habitId = req.params.id
  const { weekDays } = req.body

  const updatedHabit = await updateHabitWeekDaysService(habitId, weekDays)
  return res.status(200).json(updatedHabit)
}

export const updateHabitsController = async (req: Request, res: Response) => {
  const habitsData: IHabitsRequest = req.body
  const id: string = req.params.id
  const habitUpdate = await updateHabitsService(habitsData, id)
  return res.status(200).json(habitUpdate)
}

export const deleteHabitsController = async (req: Request, res: Response) => {
  await deleteHabitsService(req.params.id)
  return res.status(204).json()
}
