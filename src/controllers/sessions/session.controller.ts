import { Request, Response } from "express";
import { createSessionService } from "../../services/sessions/createSession.service";
import { IUserLogin } from "../../interfaces/user.interface";

export const createSessionController = async(req: Request, res: Response) => {

    const sessionData: IUserLogin = req.body
    const token = await createSessionService(sessionData)
    return res.json(token)
}