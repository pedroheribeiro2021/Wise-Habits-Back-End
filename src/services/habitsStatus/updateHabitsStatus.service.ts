import { AppDataSource } from "../../data-source"
import { HabitStatus } from "../../entities/habitsStatus.entity"

export const updateHabitStatusService = async (
  id: number,
  statuses: { [key: string]: number },
) => {
  const habitStatusRepository = AppDataSource.getRepository(HabitStatus)
  const habitStatus = await habitStatusRepository.findOneBy({ id })

  if (!habitStatus) {
    throw new AppError("HabitStatus not found")
  }

  habitStatus.statuses = statuses
  await habitStatusRepository.save(habitStatus)
  return habitStatus
}
