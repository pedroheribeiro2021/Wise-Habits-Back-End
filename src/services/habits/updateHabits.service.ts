/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDataSource } from "../../data-source"
import { Habits } from "../../entities/habits.entity"
import { AppError } from "../../errors/AppError"
import { IHabitsRequest } from "../../interfaces/habits.interface"

export const updateHabitsService = async (
  habitData: IHabitsRequest,
  id: string,
  userId: string,
): Promise<Habits> => {
  const habitsRepository = AppDataSource.getRepository(Habits)

  const habit = await habitsRepository.findOne({
    where: {
      id: id,
      user: { id: userId },
    },
  })

  if (!habit) {
    throw new AppError("Hábito não encontrado", 404)
  }

  const findHabits: Habits | null = await habitsRepository.findOneBy({
    id: habit.id,
  })

  if (!findHabits) {
    throw new AppError("Hábito não encontrado", 404)
  }

  const updatedHabits = habitsRepository.create({
    ...findHabits,
    ...habitData,
  })

  const savedHabits = (await habitsRepository.save(updatedHabits)) as Habits

  return savedHabits
}
