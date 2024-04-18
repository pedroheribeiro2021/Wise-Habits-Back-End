import { AppDataSource } from "../../data-source"
import { WeekDays } from "../../entities/weekDays"

export const listWeekDaysService = async (): Promise<WeekDays[]> => {
    const userRepository = AppDataSource.getRepository(WeekDays)
  
    const weekDays = await userRepository.find({
      relations: {
        habits: true,
      },
    })
  
    return weekDays
  }