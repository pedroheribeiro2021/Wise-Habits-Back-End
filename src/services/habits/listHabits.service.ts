import { AppDataSource } from "../../data-source"
import { Habits } from "../../entities/habits.entity"

export const listHabitsService = async (userId: string): Promise<Habits[]> => {
  const habitsRepository = AppDataSource.getRepository(Habits)

  const habits = await habitsRepository.find({
    where: {
      user: { id: userId },
    },
    relations: {
      statuses: true,
      user: true,
    },
  })

  habits.sort((a, b) => a.priority - b.priority)
  return habits
}
