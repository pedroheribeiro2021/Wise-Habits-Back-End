import { AppDataSource } from "../../data-source"
import { HabitStatus } from "../../entities/habitsStatus.entity"

export const updateHabitStatusService = async (id: number, statusValue: number) => {
  const habitStatusRepository = AppDataSource.getRepository(HabitStatus)
  const habitStatus = await habitStatusRepository.findOneBy({ id })

  if (!habitStatus) {
    throw new Error("HabitStatus not found")
  }

  habitStatus.statusValue = statusValue
  await habitStatusRepository.save(habitStatus)
  return habitStatus
}
