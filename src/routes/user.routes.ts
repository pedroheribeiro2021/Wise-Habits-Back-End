import { Router } from "express"
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users/users.controller"
import { verifyUserEmailExistsMiddleware } from "../middlewares/verifyUserEmailExists.middleware"
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware"

export const userRoutes = Router()

userRoutes.post("", verifyUserEmailExistsMiddleware, createUserController)
userRoutes.get("", listUsersController)
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController)
userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController)
