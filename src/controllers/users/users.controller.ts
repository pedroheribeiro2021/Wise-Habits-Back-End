import { Request, Response } from "express"
import { IUserRequest, IUserUpdate } from "../../interfaces/user.interface"
import { createUserService } from "../../services/users/createUsers.service"
import { deleteUserService } from "../../services/users/deleteUser.service"
import { updateUserService } from "../../services/users/updateUser.service"
import { listUsersService } from "../../services/users/listUser.service"


export const createUserController = async (req: Request, res: Response) => {

    const userData: IUserRequest = req.body
    
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

export const listUsersController = async (req: Request, res: Response) => {

    const users = await listUsersService()
    return res.json(users)
}

export const updateUserController = async (req: Request, res: Response) => {

    const userData: IUserUpdate = req.body
    const id: string = req.params.id
    const updateUser = await updateUserService(userData, id)
    return res.status(200).json(updateUser)
}

export const deleteUserController = async (req: Request, res: Response) => {

    await deleteUserService(req.params.id)
    return res.status(204).json()
}