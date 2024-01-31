import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { IUserLogin } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { compare } from "bcrypt";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/users.entity";


export const createSessionService = async ({
    email,
    password,
  }: IUserLogin): Promise<object> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      email: email,
    })

    if (!user) {
        throw new AppError("Usuário e/ou senha inválidos", 404)
      }
    
      const passwordMatch = await compare(password, user.password)
    
      if (!passwordMatch) {
        throw new AppError("Usuário e/ou senha inválidos", 401)
      }
    
      const token = jwt.sign(
        {
            id: user.id,
        },
        String(process.env.SECRET_KEY),
        {
            subject: String(user.id),
            expiresIn: "30m"
        }
    )

    return {
        id: user.id,
        data_criacao: user.created_at,
        token,
    }
  }