/* eslint-disable @typescript-eslint/no-explicit-any */
import { Repository } from "typeorm"
import { Habits } from "../../entities/habits"
import { AppDataSource } from "../../data-source"

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
