import { AppDataSource } from "../../data-source"
import { Habits } from "../../entities/habits"

export const listHabitsService = async (): Promise<Habits[]> => {
  const habitsRepository = AppDataSource.getRepository(Habits)

  const habits = await habitsRepository.find()

  return habits
}
