import { DeepPartial } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Habits } from "../../entities/habits";
// import { WeekDays } from "../../entities/weekDays";
import { IHabitsRequest } from "../../interfaces/habits.interface";


export const createHabitsService = async (habitData: IHabitsRequest): Promise<Habits> => {
    
    const habitsRepositry = AppDataSource.getRepository(Habits)

    const newHabit = habitsRepositry.create(habitData as DeepPartial<Habits>);


    await habitsRepositry.save(newHabit)

    return newHabit
}