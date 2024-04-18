import { AppDataSource } from "../../data-source"
import { WeekDays } from "../../entities/weekDays"

export const createWeekDaysService = async (weekDaysData: string) => {

    const weekDaysRepository = AppDataSource.getRepository(WeekDays)

    const newWeekDays = weekDaysRepository.create({
        days: weekDaysData
    })

    await weekDaysRepository.save(newWeekDays)

    return newWeekDays
}