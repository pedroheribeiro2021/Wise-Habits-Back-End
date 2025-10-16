import { AppDataSource } from "../../data-source"
import { HabitStatus } from "../../entities/habitsStatus.entity"
import { Habits } from "../../entities/habits.entity"

export const createHabitsStatusService = async (
  habitId: string,
  statusData: object,
): Promise<HabitStatus> => {
  const habitsStatusRepository = AppDataSource.getRepository(HabitStatus)
  const habitRepository = AppDataSource.getRepository(Habits)

  const habit = await habitRepository.findOneBy({ id: habitId })
  if (!habit) {
    throw new AppError("Hábito não encontrado")
  }

  const newStatus = habitsStatusRepository.create({
    ...statusData,
    habit, // Associa o status ao hábito
  })

  await habitsStatusRepository.save(newStatus)

  return newStatus
}
