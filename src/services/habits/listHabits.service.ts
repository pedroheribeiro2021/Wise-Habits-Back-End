import { AppDataSource } from "../../data-source"
import { Habits } from "../../entities/habits.entity"

export const listHabitsService = async (): Promise<Habits[]> => {
  const habitsRepository = AppDataSource.getRepository(Habits)

  const habits = await habitsRepository.find({
    relations: {
      statuses: true, // Carregar a relação 'statuses'
    },
  })

  habits.sort((a, b) => a.priority - b.priority)

  return habits
}
