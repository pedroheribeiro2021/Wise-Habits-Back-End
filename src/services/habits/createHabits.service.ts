import { AppDataSource } from "../../data-source";
import { Habits } from "../../entities/habits";
import { IHabitsRequest } from "../../interfaces/habits.interface";


export const createHabitsService = async (habitData: IHabitsRequest): Promise<object> => {
    
    const habitsRepositry = AppDataSource.getRepository(Habits)

    const newHabit = habitsRepositry.create({
        ...habitData,
    })

    await habitsRepositry.save(newHabit)

    return newHabit
}