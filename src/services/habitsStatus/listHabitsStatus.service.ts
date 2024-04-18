import { AppDataSource } from "../../data-source";
import { HabitStatus } from "../../entities/habitsStatus.entity";

export const listHabitsStatus = async (): Promise<HabitStatus[]> => {
    const habitsStatusRepository = AppDataSource.getRepository(HabitStatus)

    const status = await habitsStatusRepository.find({
        // relations: {
        //     habit: true
        // }
    })

    return status
}