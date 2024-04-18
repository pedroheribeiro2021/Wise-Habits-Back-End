/* eslint-disable @typescript-eslint/no-explicit-any */
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Habits } from "../../entities/habits.entity"

export const deleteHabitsService = async (id: string) => {
  const habitsRepository: Repository<Habits> =
    AppDataSource.getRepository(Habits)

  const habit: any = await habitsRepository.findOne({
    where: {
      id: id,
    },
  })

  await habitsRepository.remove(habit)
}
