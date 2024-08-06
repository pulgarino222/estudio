import { Router } from "express";
import { UserController } from "../controllers/usersControllers";

export const usersRoutes=Router()

usersRoutes.get('/',UserController.getAllUsers)
usersRoutes.get('/:id',UserController.getUserById)
usersRoutes.post('/',UserController.newUserRegister)
usersRoutes.put('/:id',UserController.userUpdated)
usersRoutes.delete('/:id', UserController.userDelete)