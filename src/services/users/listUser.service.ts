import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users.entity"

export const listUsersService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User)

  const users = await userRepository.find({
    relations: {
      habits: true,
    },
  })

  return users
}
