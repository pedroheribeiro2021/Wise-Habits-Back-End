/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDataSource } from "../../data-source"
import { Habits } from "../../entities/habits"
import { IHabitsRequest } from "../../interfaces/habits.interface"

export const updateHabitsService = async(habitsData: IHabitsRequest, habitsId: string): Promise<object> => {

    const HabitsRepository = AppDataSource.getRepository(Habits)

    const findHabits: any = await HabitsRepository.findOneBy({
        id: habitsId
    })

    const updatedHabits = HabitsRepository.create({
        ...findHabits,
        ...habitsData
    })
    
    await HabitsRepository.save(updatedHabits)

    return updatedHabits
}