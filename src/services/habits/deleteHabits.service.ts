/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDataSource } from "../../data-source"
import { Habits } from "../../entities/habits.entity"
import { AppError } from "../../errors/AppError"

export const deleteHabitsService = async (
  id: string,
  userId: string,
): Promise<void> => {
  const habitsRepository = AppDataSource.getRepository(Habits)

  const habit = await habitsRepository.findOne({
    where: {
      id: id,
      user: { id: userId }, 
    },
  })

  if (!habit) {
    throw new AppError("Habit not found", 404)
  }

  await habitsRepository.remove(habit)
}
