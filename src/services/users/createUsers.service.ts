import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users"
import { IUserRequest } from "../../interfaces/user.interface"

export const createUserService = async (
  userData: IUserRequest,
): Promise<object> => {
  const userRepository = AppDataSource.getRepository(User)

  const newUser = userRepository.create({
    ...userData,
  })

  await userRepository.save(newUser)

  return newUser
}
