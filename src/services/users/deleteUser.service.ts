/* eslint-disable @typescript-eslint/no-explicit-any */
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users"
// import { Habits } from "../../entities/habits"

export const deleteUserService = async (id: string) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: any = await userRepository.findOne({
    where: {
      id: id,
    },
    // relations: {
    //   habits: true,
    // },
  })

//   const habitsRepositry = AppDataSource.getRepository(Habits)

//   const habits: any = await habitsRepositry.findOneBy({
//     id: user.habits.id,
//   })

//   await habitsRepositry.remove(habits)

  await userRepository.remove(user)
}
