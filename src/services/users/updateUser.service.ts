/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users"
import { IUserUpdate } from "../../interfaces/user.interface"

export const updateUserService = async(userData: IUserUpdate, userId: string): Promise<object> => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser: any = await userRepository.findOneBy({
        id: userId
    })

    const updatedUser = userRepository.create({
        ...findUser,
        ...userData
    })
    
    await userRepository.save(updatedUser)

    return updatedUser
}