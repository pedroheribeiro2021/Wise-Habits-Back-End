import { DeepPartial } from "typeorm"
import { Habits } from "../../entities/habits.entity"
import { User } from "../../entities/users.entity"
import { AppDataSource } from "../../data-source"
import { IHabitsRequest } from "../../interfaces/habits.interface"

export const createHabitsService = async (
  habitData: IHabitsRequest,
): Promise<Habits> => {
  const habitsRepositry = AppDataSource.getRepository(Habits)
  const userRepository = AppDataSource.getRepository(User) // Adicione isto

  const user = await userRepository.findOneBy({ id: habitData.userId }) // Buscar o usuário

  if (!user) {
    throw new Error("Usuário não encontrado")
  }

  const newHabit = habitsRepositry.create(
    habitData as unknown as DeepPartial<Habits>,
  )

  newHabit.user = user // Associar o hábito ao usuário

  await habitsRepositry.save(newHabit)

  return newHabit
}
